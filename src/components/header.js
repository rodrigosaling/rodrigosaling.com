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
          <ul className="nav" role="menu">
            <li className="nav-about-me nav-current" role="menuitem">
              <Link to="/sobre-mim">Sobre mim</Link>
            </li>
            <li className="nav-projetos" role="menuitem">
              <Link to="/projetos">Projetos</Link>
            </li>
            <li className="nav-blog" role="menuitem">
              <Link to="/blog">Blog</Link>
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
