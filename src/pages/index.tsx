import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
        sort: { childrenMdx: { frontmatter: { updatedDate: DESC } } }
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
              updatedDate
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <div>
        <header>
          <h1>Rodrigo Saling</h1>

          <p>
            Building web stuff one{' '}
            <code>
              <span>console</span>.<span>log</span>()
            </code>{' '}
            at a time.
          </p>

          {/* <nav>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav> */}
        </header>

        <main>
          {data.allFile.nodes.length > 0 && <h2>Latest from Blog</h2>}
          {data.allFile.nodes.map((node) => (
            <article key={node.childMdx.id}>
              <h3 className="text-4xl font-bold">
                <Link to={`/blog/${node.childMdx.fields.slug}`}>
                  {node.childMdx.frontmatter.title}
                </Link>
              </h3>

              <p>Published on {node.childMdx.frontmatter.updatedDate}</p>
            </article>
          ))}
        </main>

        <footer>
          <p>Since 1983.</p>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rodrigo Saling</title>;
