import React from "react";
import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const LiveCoding = () => (
  <Layout>
    <ProjectPage
      title="上highsubroute"
      info="Live Coding | 2025"
      description={[
        "First Live Coding performance @ CEDAR KITCHEN in March, 2025.",
        "Performed with Shanghai Subroute.",
      ]}
      media={[
        {
          type: "embed",
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1070392143?h=8c21b387de" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
      ]}
    />
  </Layout>
);

export default LiveCoding;
