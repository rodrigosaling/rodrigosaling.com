import React from 'react';
import { graphql, HeadFC, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Template from './template';
import { HeadingOne } from '../components/heading-one';
import SEO from './seo';

const shortcodes = { Link }; // Provide common components here

export default function BlogPost({ data, children }) {
  const post = data.allFile.nodes[0].childMdx;
  const publishedDate = new Date(post.frontmatter.publishedDate);

  return (
    <Template>
      <>
        <HeadingOne>{post.frontmatter.title}</HeadingOne>
        <p className="mb-10">
          Publicado em{' '}
          <time dateTime={publishedDate.toUTCString()}>
            {publishedDate.toLocaleDateString('pt-br', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
          .
        </p>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>

        <div className="mt-10">
          <Link to="/blog" className="underline hover:no-underline">
            Voltar para o Blog
          </Link>
        </div>
      </>
    </Template>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childrenMdx: {
          elemMatch: {
            frontmatter: { published: { eq: true } }
            fields: { slug: { eq: $slug } }
          }
        }
      }
    ) {
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
          body
        }
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  const post = data.allFile.nodes[0].childMdx;

  return (
    <SEO>
      <html lang="pt-br" />
      <title>{post.frontmatter.title} - Blog - Rodrigo Saling</title>
      <meta
        name="description"
        content="Rodrigo é um Senior Software Engineer que mora em Porto Alegre, Brasil."
      ></meta>
    </SEO>
  );
};
