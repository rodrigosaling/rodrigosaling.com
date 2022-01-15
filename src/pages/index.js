import * as React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';
import Link from '../components/link';

function IndexPage() {
  return (
    <div className="">
      <Helmet
        htmlAttributes={{ lang: 'en', class: 'p-5 bg-slate-50 text-slate-700' }}
      >
        <title>Rodrigo Saling</title>
      </Helmet>

      <header>
        <h1 className="font-bold">Rodrigo Saling</h1>
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
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li> */}
            <li>
              <Link to="/old-blog-archive">Old blog archive</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mt-10">
        <h2 className="font-bold">Welcome!</h2>
        <p className="mt-2">
          Hello! Nice to see you here!{' '}
          <span role="img" aria-label="Hand waving emoji">
            👋
          </span>
        </p>
        <p className="mt-2">
          I am building my site one page at a time, so right now there aren't
          much content around. Things will be gradually published during the
          next weeks.
        </p>
      </main>

      <footer className="mt-10">
        <p className="text-xs">
          Built with{' '}
          <Link to="https://www.gatsbyjs.com/" title="Go to Gatsby website">
            Gatsby
          </Link>{' '}
          and{' '}
          <Link
            to="https://tailwindcss.com/"
            title="Go to Tailwind CSS website"
          >
            Tailwind CSS
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}

export default IndexPage;
