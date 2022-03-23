import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import Link from '../../components/link';

const publishedAt = (date) =>
  new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(date));

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
          <h3>
            <Link to={`${node.slug}`}>{node.frontmatter.title}</Link>
          </h3>

          <p>Publicado em {publishedAt(node.frontmatter.date)}</p>
        </article>
      ))}
    </Layout>
  );
}

export default OldBlogArchivePage;
