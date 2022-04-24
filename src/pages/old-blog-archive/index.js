import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import Link from '../../components/link';
import { publishedAt } from '../../utils';

function OldBlogArchivePage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "old-blog-archive" }
          childMdx: {
            isFuture: { eq: false }
            frontmatter: { published: { eq: true } }
          }
        }
        sort: { fields: childMdx___frontmatter___date, order: DESC }
      ) {
        totalCount
        nodes {
          childMdx {
            id
            slug
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Old Blog Archive">
      <h2 className="font-bold">Old Blog Archive</h2>
      <div className="space-y-5">
        {data.allFile.nodes.map((node) => (
          <article key={node.childMdx.id}>
            <h3>
              <Link to={`${node.childMdx.slug}`}>
                {node.childMdx.frontmatter.title}
              </Link>
            </h3>

            <p className="text-sm">
              Publicado em {publishedAt(node.childMdx.frontmatter.date)}
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export default OldBlogArchivePage;
