import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { useLocation } from '@reach/router';
import Icon from '../images/upside-down-all-paperclip-logo.svg';

export default function Footer() {
  const location = useLocation();
  const isBlog = location.pathname.includes('/blog/');

  return (
    <footer>
      <p>
        {isBlog ? 'Encontre-me nestes outros lugares:' : 'Find me elsewhere:'}
      </p>

      <menu>
        <li>
          <a href="https://github.com/rodrigosaling">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rodrigosaling/">LinkedIn</a>
        </li>
      </menu>
    </footer>
  );
}
