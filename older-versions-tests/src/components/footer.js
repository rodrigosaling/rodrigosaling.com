import React from 'react';
import { linkClasses } from './link';

function Footer() {
  return (
    <footer className="mt-10">
      <p className="text-xs">
        Built with{' '}
        <a
          href="https://www.gatsbyjs.com/"
          title="Go to Gatsby website"
          className={linkClasses}
        >
          Gatsby
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          title="Go to Tailwind CSS website"
          className={linkClasses}
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
