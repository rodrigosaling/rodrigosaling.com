import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function BlogTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <time>{frontmatter.date}</time>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p>
        Tags:
        {frontmatter.tags.map(tag => (
          <span key={tag}>
            {' '}
            <Link to={`/tags/${kebabCase(tag)}/`}>
              {tag}
            </Link>
          </span>
        ))}
      </p>
    </Layout>
  );
}

export const blogPageQuery = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path } }
    ) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pt-br")
        title
        tags
      }
    }
  }
`;
