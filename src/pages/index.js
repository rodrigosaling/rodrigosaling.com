import React from 'react';
import { Link } from 'gatsby';

import LayoutHome from '../layout/layout-home';
import SEO from '../components/seo';

const IndexPage = () => (
  <LayoutHome>
    <SEO title="Home" keywords={[`rodrigo`, `saling`, `blog`, 'projects', 'developer']} />
    <h1 id="hello">Hello!</h1>
    <p>My name is Rodrigo Saling and I am a front-end web developer living in Porto Alegre, Brazil.</p>
    <p>You can find the links to my my profiles across the www by going to the <a href="/about-me">About Me</a> page. You can also find the links to my Spotify playlists there.</p>
    <p>You can also check my <a href="/projects">personal projects</a>.</p>
    <p>But if you are here for the nonsense stuff, you can check my <a href="/blog">blog</a>.</p>
    <p>Have a nice day!</p>
  </LayoutHome>
);

export default IndexPage;
