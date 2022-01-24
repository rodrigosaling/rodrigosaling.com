import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import Link from '../../components/link';

function OldBlogArchivePage() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          isFuture: { eq: false }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          slug
          frontmatter {
            title
            tags
            slug
            date
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Old Blog Archive">
      <h2 className="font-bold">Old Blog Archive</h2>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>

          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
}

export default OldBlogArchivePage;
