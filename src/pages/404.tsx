import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import SEO from '../templates/seo';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div>
      <main>
        <h1>404</h1>
        <p>The page you tried to access does not exist.</p>
        <p>
          Maybe you should go back to <Link to="/">Home</Link> and start from
          there.
        </p>
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <SEO>
    <title id="title">404 - Rodrigo Saling</title>
  </SEO>
);
