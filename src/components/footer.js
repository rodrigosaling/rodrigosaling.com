import React from 'react';

import Link from './link';

function Footer() {
  return (
    <footer className="mt-10">
      <p className="text-xs">
        Built with{' '}
        <Link to="https://www.gatsbyjs.com/" title="Go to Gatsby website">
          Gatsby
        </Link>{' '}
        and{' '}
        <Link to="https://tailwindcss.com/" title="Go to Tailwind CSS website">
          Tailwind CSS
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
