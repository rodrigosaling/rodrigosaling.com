import React from 'react';

const Footer = () => (
  <footer className={'footer'}>
    Rodrigo Saling © 1983 - {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
