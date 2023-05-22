import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <div className="">
        <header>
          <h1 className="text-4xl font-bold">Projects</h1>
        </header>

        <main className="mt-4">
          <nav></nav>
        </main>

        <footer className="text-xs mt-6">
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

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects - Rodrigo Saling</title>;
