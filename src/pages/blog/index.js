import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import Link from '../../components/link';

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
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
    <Layout pageTitle="Blog">
      <h2 className="font-bold">Blog</h2>
      {!data.allFile.nodes.length && <p>No posts found.</p>}
      {data.allFile.nodes.map((node) => (
        <article key={node.childMdx.id}>
          <h2>
            <Link to={`${node.childMdx.slug}`}>
              {node.childMdx.frontmatter.title}
            </Link>
          </h2>

          <p>Posted: {node.childMdx.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
}

export default BlogPage;
