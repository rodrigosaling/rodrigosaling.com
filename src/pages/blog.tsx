import * as React from 'react';
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';
import Link from '../components/link';
import SEO from '../templates/seo';
import Template from '../templates/template';

const BlogPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          childrenMdx: {
            elemMatch: { frontmatter: { isPublished: { eq: true } } }
          }
        }
        sort: { childrenMdx: { frontmatter: { publishedAt: DESC } } }
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
              publishedAt
              summary
              tags
            }
          }
        }
      }
    }
  `);

  return (
    <Template>
      <HeadingOne>Blog</HeadingOne>

      <p>Todo o conteúdo do blog está escrito em português brasileiro.</p>

      {!data.allFile.nodes.length && <p>Nada aqui ainda.</p>}

      {data.allFile.nodes.map((node) => {
        const publishedDate = new Date(node.childMdx.frontmatter.publishedAt);

        return (
          <article key={node.childMdx.id} style={{ marginTop: '2rem' }}>
            <HeadingTwo>
              <Link to={`${node.childMdx.fields.slug}`}>
                {node.childMdx.frontmatter.title}
              </Link>
            </HeadingTwo>

            <time dateTime={publishedDate.toUTCString()}>
              {publishedDate.toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                gap: '1rem',
                padding: 0,
              }}
            >
              {node.childMdx.frontmatter.tags.map((tag: string) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        );
      })}
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
