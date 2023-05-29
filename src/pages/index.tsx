import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-slate-50 rounded-lg shadow-lg">
        <header className="mt-6 mr-6 ml-6">
          <h1 className="text-4xl font-bold">Rodrigo Saling</h1>
        </header>

        <main className="mt-4">
          <p className="mr-6 ml-6 text-base">
            Building web stuff one{' '}
            <code className="bg-gray-200 p-1 rounded-md text-sm">
              <span className="text-red-500">console</span>.
              <span className="text-blue-500">log</span>()
            </code>{' '}
            at a time.
          </p>

          <nav>
            <ul className="my-5 flex flex-col gap-1">
              <li>
                <Link
                  to="/about-me"
                  className="py-3 px-6 block hover:bg-orange-100"
                >
                  <h2 className="text-lg font-bold">About me</h2>
                  <p className="text-slate-500 text-sm">
                    More information about the person who is building this
                    website.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="py-3 px-6 block hover:bg-indigo-100"
                >
                  <h2 className="text-lg font-bold">Projects</h2>
                  <p className="text-slate-500 text-sm">
                    Can I build that with JavaScript?
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-3 px-6 block hover:bg-lime-100">
                  <h2 className="text-lg font-bold">Blog</h2>
                  <p className="text-slate-500 text-sm">
                    My personal blog where I write about anything (in Brazilian
                    Portuguese 🇧🇷).
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </main>

        <footer className="text-xs mt-10 mr-6 mb-6 ml-6">
          This site is built with{' '}
          <a
            href="https://www.gatsbyjs.com/"
            className="underline hover:no-underline hover:text-purple-500"
          >
            Gatsby
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com/"
            className="underline hover:no-underline hover:text-cyan-500"
          >
            Tailwind
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rodrigo Saling</title>;
