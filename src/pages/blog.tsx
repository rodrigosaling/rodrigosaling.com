import * as React from 'react';
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby';
import Link from '../components/link';
import Template from '../templates/template';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';
import SEO from '../templates/seo';

const BlogPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query AllPublishedPosts {
      allContentfulBlogPost(filter: { node_locale: { eq: "pt-BR" } }) {
        nodes {
          id
          title
          slug
          node_locale
          summary
          metadata {
            tags {
              name
              contentful_id
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  `);

  return (
    <Template htmlLang="pt-br">
      <>
        <HeadingOne>Blog</HeadingOne>

        <p>Todo o conteúdo do blog está escrito em português brasileiro.</p>

        {!data.allContentfulBlogPost.nodes.length && <p>Nada aqui ainda.</p>}

        {data.allContentfulBlogPost.nodes.map((node) => {
          const publishedDate = new Date(node.createdAt);

          return (
            <article key={node.id}>
              <HeadingTwo>
                <Link to={`${node.slug}`}>{node.title}</Link>
              </HeadingTwo>

              <time dateTime={publishedDate.toUTCString()}>
                {publishedDate.toLocaleDateString('pt-br', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>

              <p>{node.summary}</p>

              <ul>
                {node.metadata.tags.map(({ name, contentful_id }) => (
                  <li key={contentful_id}>
                    <Link to={`/tags/${contentful_id}`}>{name}</Link>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </>
    </Template>
  );
};

export default BlogPage;

export const Head: HeadFC = () => (
  <SEO>
    <html lang="pt-br" />
    <title>Blog - Rodrigo Saling</title>
    <meta
      name="description"
      content="Rodrigo é um Senior Software Engineer que mora em Porto Alegre, Brasil."
    />
  </SEO>
);
