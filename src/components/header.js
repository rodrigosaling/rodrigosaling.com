import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="site-header outer">
    <div className="inner">
      <nav className="site-nav">
        <div className="site-nav-left">
          <Link className="site-nav-logo" to="/">
            {siteTitle}
          </Link>
        </div>
        <div className="site-nav-right">
          <ul className="nav">
            <li className="nav-about-me nav-current">
              <Link to="/sobre-mim/">Sobre mim</Link>
            </li>
            <li className="nav-projetos">
              <Link to="/projetos/">Projetos</Link>
            </li>
            <li className="nav-blog">
              <Link to="/blog/">Blog</Link>
            </li>
            <li className="nav-191">
              <Link to="/191/">191</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: 'Rodrigo Saling'
};

export default Header;
