import React from "react";
import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const Breakfast = () => (
  <Layout>
    <ProjectPage
      title="Breakfast: 12000 After Guild"
      info="Speculative | Ongoing"
      description={[
        "Inspired by Frank Herbert's desert planet Arrakis, this speculative project envisions how a breakfast routine might look like in a distant future shaped by extreme water scarcity.",
        "Set as a collaborative interactive dining experience, the primary materials used to create the speculative meal are shelf-stable contemporary food products. These recipes are 100% water-free with dishware 3D printed from eggshell biocomposite.",
        <>
          Accompanying the meal is{" "}
          <a
            href="https://atrius-digitial-encyclopedia.glitch.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atrius
          </a>
          , a digital encyclopedia which provides further information on the
          ingredients and the world-building of the project.
        </>,
        "Created in collaboration with Annie Church, as a part of Imogene and Mercer.",
        "A more refined version of this project will be presented at the 2025 Shanghai Climate Week Conference.",
      ]}
      media={[
        { type: "image", src: "/imgs/breakfast/br1.jpeg" },
        { type: "image", src: "/imgs/breakfast/br4.jpeg" },
        { type: "image", src: "/imgs/breakfast/br3.jpeg" },
      ]}
    />
  </Layout>
);

export default Breakfast;
