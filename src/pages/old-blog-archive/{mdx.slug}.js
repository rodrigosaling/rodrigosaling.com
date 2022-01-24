import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

function BlogPost({ data }) {
  const post = data.mdx.frontmatter;

  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{post.title}</h1>
        <em>{post.date}</em>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </main>
    </div>
  );
}

export default BlogPost;

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pt-br")
        title
        tags
      }
    }
  }
`;
