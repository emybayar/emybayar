import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeBackground = () => {
  // console.log("ThreeBackground mounted");
  const containerRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const pointCloudRef = useRef();
  const positionsRef = useRef([]);
  const colorsRef = useRef([]);

  const startParticles = 300;
  const particlesPerInterval = 100;
  const maxParticles = 8000;
  const WORLD_SIZE = 500;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.z = 2000;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    new OrbitControls(camera, renderer.domElement);

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(maxParticles * 3); // preallocated max size
    const colors = new Float32Array(maxParticles * 3);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ vertexColors: true, size: 3 });
    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);
    pointCloudRef.current = pointCloud;

    positionsRef.current = [];
    colorsRef.current = [];
    addParticles(startParticles);
    const interval = setInterval(() => {
      const currentCount = positionsRef.current.length / 3;
      if (currentCount < maxParticles) {
        addParticles(
          Math.min(particlesPerInterval, maxParticles - currentCount)
        );
      } else {
        clearInterval(interval); // stop when limit reached
      }
    }, 300);

    const animate = () => {
      camera.position.z -= 1;
      if (pointCloud) {
        pointCloud.rotation.y += 0.001;
        pointCloud.rotation.x += 0.003;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const onResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) container.removeChild(renderer.domElement);
    };
  }, []);

  const addParticles = (count) => {
    const geometry = pointCloudRef.current.geometry;
    const posArray = positionsRef.current;
    const colArray = colorsRef.current;

    const startLen = posArray.length;

    for (let i = 0; i < count; i++) {
      let x = Math.random() * WORLD_SIZE - WORLD_SIZE / 2;
      let y = Math.random() * WORLD_SIZE - WORLD_SIZE / 2;
      let z = Math.random() * WORLD_SIZE - WORLD_SIZE / 2;
      posArray.push(x, y, z);

      if (Math.random() < 0.05) {
        colArray.push(1, 0, 0);
      } else {
        colArray.push(0, 0, 1);
      }
    }

    geometry.attributes.position.array.set(new Float32Array(posArray));
    geometry.attributes.color.array.set(new Float32Array(colArray));
    geometry.setDrawRange(0, posArray.length / 3);
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ThreeBackground;
