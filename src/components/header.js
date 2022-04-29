import { Link as GastbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './link';

function Header({ siteTitle }) {
  return (
    <header>
      <div>
        <div>
          <GastbyLink to="/" className="font-bold">
            {siteTitle}
          </GastbyLink>
        </div>
        <header>
          <nav className="mt-5">
            <ul className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
              <Link to="/about-me">About me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/code">Code</Link>
            </li> */}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/old-blog-archive">Old blog archive</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Rodrigo Saling',
};

export default Header;
