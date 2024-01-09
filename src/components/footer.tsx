import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { useLocation } from '@reach/router';
import Icon from '../images/upside-down-all-paperclip-logo.svg';

export default function Footer() {
  const location = useLocation();
  const isBlog = location.pathname.includes('/blog/');

  return (
    <footer className="py-3 border-t-neutral-300 border-t mt-7 flex justify-between">
      <div className="text-sm">
        {isBlog ? 'Espere por MacGyverismos.' : 'Expect MacGyverisms.'}
      </div>

      <Link to="/about-me#whats-up-with-the-logo" className="">
        <img
          alt="Website logo, a triangle paperclip that resembles an upside down A"
          src={Icon}
          width={20}
        />
      </Link>

      <menu className="flex gap-4">
        <li className="text-sm">
          <a
            href="https://github.com/rodrigosaling"
            className="underline hover:no-underline"
          >
            GitHub
          </a>
        </li>
        <li className="text-sm">
          <a
            href="https://www.linkedin.com/in/rodrigosaling/"
            className="underline hover:no-underline"
          >
            LinkedIn
          </a>
        </li>
        {/* <li className="text-sm">
                <a
                  href="https://medium.com/@rodrigosaling"
                  className="underline hover:no-underline"
                >
                  Medium
                </a>
              </li> */}
      </menu>
    </footer>
  );
}
