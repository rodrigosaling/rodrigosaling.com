import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const UsesPage: React.FC<PageProps> = () => {
  return (
    <div>
      <div>
        <header>
          <h1>Uses</h1>
        </header>

        <main>
          <ul>
            <li>WebStorm for work and VSCode for personal projects</li>
          </ul>
        </main>

        <footer></footer>
      </div>
    </div>
  );
};

export default UsesPage;

export const Head: HeadFC = () => <title>Uses - Rodrigo Saling</title>;
