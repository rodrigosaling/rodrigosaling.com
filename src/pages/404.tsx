import * as React from 'react';
import { Link, HeadFC, PageProps, useStaticQuery, graphql } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-screen bg-slate-700 text-slate-300 flex items-end">
      <main className="p-3">
        <h1 className="text-9xl font-black font-mono">404</h1>
        <p className="text-base">
          The page you tried to access does not exist.
        </p>
        <p className="text-base">
          Maybe you should go back to{' '}
          <Link to="/" className="underline font-bold hover:text-purple-400">
            Home
          </Link>{' '}
          and start from there.
        </p>
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <title>404 - {data.site.siteMetadata.title}</title>;
};
