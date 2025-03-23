import * as React from 'react';
import { useLocation } from '@reach/router';

export default function Footer() {
  const location = useLocation();
  // const isBlog = location.pathname.includes('/blog/');

  return (
    <footer>

      <menu>
        <li>
          <a
            href="https://github.com/rodrigosaling" 
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rodrigosaling/"
          >
            LinkedIn
          </a>
        </li>
      </menu>
    </footer>
  );
}
