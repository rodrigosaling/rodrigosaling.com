import * as React from 'react';
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby';
import Link from '../components/link';
import Template from '../templates/template';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';

const BlogPage: React.FC<PageProps> = () => {
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
              tags
            }
          }
        }
      }
    }
  `);

  return (
    <Template htmlLang="pt-br">
      <>
        <HeadingOne>Blog</HeadingOne>

        <p>Todo o conteúdo do blog está escrito em português brasileiro.</p>

        {!data.allFile.nodes.length && <p>Nada aqui ainda.</p>}

        {data.allFile.nodes.map((node) => {
          const publishedDate = new Date(
            node.childMdx.frontmatter.publishedDate
          );

          return (
            <article key={node.childMdx.id}>
              <HeadingTwo>
                <Link to={`${node.childMdx.fields.slug}`}>
                  {node.childMdx.frontmatter.title}
                </Link>
              </HeadingTwo>

              <time dateTime={publishedDate.toUTCString()} className="block">
                {publishedDate.toLocaleDateString('pt-br', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>

              {/* <ul className="flex gap-2">
                {node.childMdx.frontmatter.tags.map((tag) => (
                  <li key={tag}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul> */}
            </article>
          );
        })}
      </>
    </Template>
  );
};

export default BlogPage;

export const Head: HeadFC = () => (
  <>
    <html lang="pt-br" />
    <title>Blog - Rodrigo Saling</title>
  </>
);
