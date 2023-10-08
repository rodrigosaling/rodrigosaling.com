import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link, graphql, useStaticQuery } from 'gatsby';
import '../styles/index.css';

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          childrenMdx: {
            elemMatch: { frontmatter: { published: { eq: true } } }
          }
        }
        sort: { childrenMdx: { frontmatter: { publishedDate: DESC } } }
      ) {
        totalCount
        nodes {
          childMdx {
            id
            fields {
              slug
            }
            frontmatter {
              title
              publishedDate
            }
          }
        }
      }
    }
  `);

  return (
    <div className="mx-auto max-w-3xl px-4">
      <header className="py-3 border-b-neutral-300 border-b mt-5 flex justify-between">
        <h1 className="font-bold">Rodrigo Saling</h1>

        <nav>
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
            <li>
              <Link to="/blog" className="underline hover:no-underline">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <p className="text-4xl font-bold mt-16 max-w-md">
          Building web stuff one{' '}
          <code className="font-mono text-3xl bg-neutral-200 p-1 rounded-md">
            <span>console</span>.<span>log</span>()
          </code>{' '}
          at a time.
        </p>
        <p className="mt-12 pb-16 border-b border-b-neutral-300">
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

        {data.allFile.nodes.length > 0 && (
          <h2 className="mt-7 mb-4 text-sm font-bold">Newest blog posts</h2>
        )}
        {data.allFile.nodes.map((node) => {
          const date = new Date(
            `${node.childMdx.frontmatter.publishedDate}T00:00`
          );

          return (
            <article key={node.childMdx.id}>
              <h3 className="text-2xl" lang="pt-BR">
                <Link to={`/blog/${node.childMdx.fields.slug}`}>
                  {node.childMdx.frontmatter.title}
                </Link>
              </h3>
              <p>
                Published on{' '}
                {`${date.getDate()} ${date.toLocaleString('default', {
                  month: 'short',
                })} ${date.getFullYear()}`}
              </p>
            </article>
          );
        })}
      </main>
      <footer className="py-3 border-t-neutral-300 border-t mt-7 flex justify-between">
        <div className="text-sm">Since 1983</div>
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
        </ul>
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rodrigo Saling</title>;
