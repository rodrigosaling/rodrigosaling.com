import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <div className="halftone h-screen">
      <div className="">
        <header>
          <h1 className="text-4xl font-bold">Projects</h1>
        </header>

        <main className="mt-4">
          <nav></nav>
          <p>
            You can check{' '}
            <a
              href="https://github.com/rodrigosaling"
              className="underline hover:no-underline hover:text-orange-400"
            >
              my GitHub profile
            </a>{' '}
            in the meantime.
          </p>
        </main>

        <footer className="text-xs mt-6"></footer>
      </div>
    </div>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects - Rodrigo Saling</title>;
