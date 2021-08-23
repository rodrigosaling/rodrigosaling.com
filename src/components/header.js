import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="border-b p-3 mb-10">
    <nav className="flex justify-between">
      <div className="">
        <Link className="" to="/">
          {siteTitle}
        </Link>
      </div>
      <div className="">
        <ul className="flex space-x-4">
          <li className="">
            <Link to="/sobre-mim/">Sobre mim</Link>
          </li>
          <li className="">
            <Link to="/projetos/">Projetos</Link>
          </li>
          <li className="">
            <Link to="/blog/">Blog</Link>
          </li>
          <li className="">
            <Link to="/191/">191</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Rodrigo Saling',
};

export default Header;
