import React from "react";
import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const Enfut = () => (
  <Layout>
    <ProjectPage
      title="ENFUT"
      info="Simulation Game | Unity | 2025"
      description={[
        "ENFUT is my first interactive simulation I built to explore the emergent behaviors that might arise from a world that is both precoded and pre-mediated. I wanted to see how digital beings might “decide” to move through such a space on their own terms.",
        "Set within a speculative forest, the work stages a system in which agents don’t follow the player’s commands, but instead behave according to their own internal states. As a player, your role is observational. You’re tasked with decoding the conditional logics that shape this digital ecology — but you’re being watched just as much as watching.",
        "The agents aren’t limited to visible creatures; I’ve treated the changes in sound, growth of plants, for example, as agents, too.",
        <>
          Try Enfut{" "}
          <a
            href="https://emsbay.itch.io/enfut-web-build"
            target="_blank"
            rel="noopener noreferrer"
          >
            in the browser
          </a>
          .
        </>,
      ]}
      media={[
        { type: "image", src: "/imgs/enfut/enfut-1.jpeg" },
        {
          type: "embed",
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1077492825?h=1d74e5aec0" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
        {
          type: "embed",
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1077491195?h=903bdb8584" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
      ]}
    />
  </Layout>
);

export default Enfut;
