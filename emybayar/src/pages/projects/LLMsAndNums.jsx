import React from "react";
import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const LLMs = () => (
  <Layout>
    <ProjectPage
      title="LLMs Understand Numbers (Differently)?"
      info="Algorithms | 2024"
      description={[
        "This project explores how large language models (LLMs) respond to numbers when removed from strictly mathematical contexts.",
        'By prompting the model with questions like "How does 531 make you feel?", we investigate if a numerical input can elicit expressive or interpretive responses. Rather than emphasizing correctness or computation, the focus is on meaning through association.',
        "P5.js is used as a middle layer to visualize the LLMs visual response.",
      ]}
      media={[
        {
          type: "embed",
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081432954?h=62a05c632f" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
        // { type: "image", src: "/imgs/llms-nums/llms-nums-1.png" },
        // { type: "image", src: "/imgs/llms-nums/llms-nums-3.png" },
        // { type: "image", src: "/imgs/llms-nums/llms-nums-5.png" },
      ]}
    />
  </Layout>
);

export default LLMs;
