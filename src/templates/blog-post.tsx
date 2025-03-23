import { HeadingOne } from '../components/heading-one';
import SEO from './seo';
import Template from './template';
import { MDXProvider } from '@mdx-js/react';
import { graphql, HeadFC, Link, useStaticQuery } from 'gatsby';
import React from 'react';

const shortcodes = { Link }; // Provide common components here

export default function BlogPost({ data, children }) {
  const post = data.allFile.nodes[0].childMdx;
  const publishedDate = new Date(post.frontmatter.publishedAt);

  return (
    <Template>
      <HeadingOne>{post.frontmatter.title}</HeadingOne>
      <p>
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

      <div>
        <Link to="/blog">Voltar para o Blog</Link>
      </div>
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
            frontmatter: { isPublished: { eq: true } }
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
            publishedAt
            summary
            tags
          }
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
