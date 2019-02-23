import React from "react";
import Helmet from "react-helmet";
import LayoutHome from "../layout/layout-home";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import { Link } from 'gatsby';

class Index extends React.Component {
  render() {
    return (
      <LayoutHome>
        <Helmet title={config.siteTitle} />
        <SEO />
        <h1 id="hello">Olá!</h1>
        <p>My name is Rodrigo Saling and I am a front-end web developer living in Porto Alegre, Brazil.</p>
        <p>You can find the links to my my profiles across the www by going to the <Link to="/sobre-mim">About Me</Link> page. You can also find the links to my Spotify playlists there.</p>
        <p>You can also check my <a href="/projects">personal projects</a>.</p>
        <p>But if you are here for the nonsense stuff, you can check my <a href="/blog">blog</a>.</p>
        <p>Have a nice day!</p>
      </LayoutHome>
    );
  }
}

export default Index;
