import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Sobre mim | ${config.siteTitle}`} />
        <h1>About Me</h1>
        <p>Pois é... por enquanto nenhum conteúdo aqui.</p>
      </Layout>
    );
  }
}

export default AboutPage;
