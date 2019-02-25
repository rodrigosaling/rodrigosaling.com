import React from 'react';
import { Link } from 'gatsby';

import LayoutHome from '../components/layout-home';
import SEO from '../components/seo';

const IndexPage = () => (
  <LayoutHome>
    <SEO title="Inicial" />
    <h1 id="hello">Olá!</h1>
    <p>My name is Rodrigo Saling and I am a front-end web developer living in Porto Alegre, Brazil.</p>
    <p>You can find the links to my my profiles across the www by going to the <Link to="/sobre-mim">About Me</Link> page. You can also find the links to my Spotify playlists there.</p>
    <p>You can also check my <Link to="/projetos">personal projects</Link>.</p>
    <p>But if you are here for the nonsense stuff, you can check my <Link to="/blog">blog</Link>.</p>
    <p>Have a nice day!</p>
  </LayoutHome>
);

export default IndexPage;
