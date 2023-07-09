import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const UsesPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <div className="">
        <header>
          <h1 className="text-4xl font-bold">Uses</h1>
        </header>

        <main className="mt-4">
          <ul>
            <li>WebStorm for work and VSCode for personal projects</li>
          </ul>
        </main>

        <footer className="text-xs mt-6"></footer>
      </div>
    </div>
  );
};

export default UsesPage;

export const Head: HeadFC = () => <title>Uses - Rodrigo Saling</title>;
