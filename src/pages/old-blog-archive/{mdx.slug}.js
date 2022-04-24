import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import { publishedAt } from '../../utils';

export const query = graphql`
  query ($slug: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "old-blog-archive" }
        childMdx: {
          frontmatter: { published: { eq: true } }
          slug: { eq: $slug }
        }
      }
    ) {
      nodes {
        childMdx {
          body
          frontmatter {
            date
            title
            tags
          }
        }
      }
    }
  }
`;

function BlogPost({ data }) {
  // TODO Existe uma maneira de trazer somente um elemento ao invés do array?
  const mdx = data.allFile.nodes[0].childMdx;

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <h1>{mdx.frontmatter.title}</h1>
      <em>Publicado em {publishedAt(mdx.frontmatter.date)}</em>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}

export default BlogPost;
