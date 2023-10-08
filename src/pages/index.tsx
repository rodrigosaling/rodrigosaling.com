import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
// import { Link } from 'gatsby';
import '../styles/index.css';

const IndexPage: React.FC<PageProps> = () => (
  <div className="mx-auto max-w-3xl px-4">
    <header className="py-3 border-b-neutral-300 border-b mt-5 flex justify-between">
      <h1 className="font-bold">Rodrigo Saling</h1>

      {/* <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/about-me" className="underline hover:no-underline">
              About me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="underline hover:no-underline">
              Projects
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>

    <main>
      <p className="text-4xl font-bold mt-16 max-w-md">
        Building web stuff one{' '}
        <code className="font-mono text-3xl bg-neutral-200 p-1 rounded-md">
          <span>console</span>.<span>log</span>()
        </code>{' '}
        at a time.
      </p>
      <p className="mt-12 mb-16">
        Rodrigo is a Software Engineer located in{' '}
        <a
          href="https://en.wikipedia.org/wiki/Porto_Alegre"
          className="rio-grande-do-sul underline"
          title="Link to the Porto Alegre Wikipedia page"
        >
          Porto Alegre
        </a>
        , working remotely for{' '}
        <a
          href="https://league.com/"
          className="text-violet-700 underline hover:no-underline"
          title="Link to League Inc. website"
        >
          League Inc
        </a>
        .
      </p>
    </main>
    <footer className="py-3 border-t-neutral-300 border-t mt-7 flex justify-between">
      <div className="text-sm">Expect MacGyverisms.</div>
      <ul className="flex gap-4">
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
        <li className="text-sm">
          <a
            href="https://medium.com/@rodrigosaling"
            className="underline hover:no-underline"
          >
            Medium
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Rodrigo Saling</title>;
