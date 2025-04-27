import * as React from 'react';
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';
import Link from '../components/link';
import SEO from '../templates/seo';
import Template from '../templates/template';

const BlogPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query posts {
      allContentfulBlogPost(
        filter: { node_locale: { eq: "pt-BR" } }
        sort: { createdAt: DESC }
      ) {
        nodes {
          id
          title
          slug
          node_locale
          summary
          createdAt
          updatedAt
        }
      }
    }
  `);

  return (
    <Template>
      <HeadingOne>Blog</HeadingOne>

      <p style={{ marginBottom: '2rem' }}>
        Todo o conteúdo do blog está escrito em português brasileiro.
      </p>

      {!data.allContentfulBlogPost.nodes.length && <p>Nada aqui ainda.</p>}

      {data.allContentfulBlogPost.nodes.map((node) => {
        const publishedDate = new Date(node.createdAt);

        return (
          <article key={node.id} style={{ marginBottom: '3rem' }}>
            <HeadingTwo>
              <Link to={`${node.slug}`}>{node.title}</Link>
            </HeadingTwo>

            <time
              dateTime={publishedDate.toUTCString()}
              style={{
                display: 'block',
                fontSize: '0.8rem',
                marginBottom: '1rem',
              }}
            >
              {publishedDate.toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>

            <p>{node.summary}</p>
          </article>
        );
      })}
    </Template>
  );
};

export default BlogPage;

export const Head: HeadFC = () => (
  <SEO>
    <html id="html" lang="pt-br" />
    <title id="title">Blog - Rodrigo Saling</title>
    <meta
      id="description"
      name="description"
      content="Rodrigo é um Senior Software Engineer que mora em Porto Alegre, Brasil."
    />
  </SEO>
);
