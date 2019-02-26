import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Blog extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <div className="post-feed">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.frontmatter.slug;
            return (
              <article key={node.frontmatter.slug} className={'post-card'}>
                <h2>
                  <Link to={node.frontmatter.path}>
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </article>
            )
          })}
        </div>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "blog" }, published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            slug
            path
          }
        }
      }
    }
  }
`;
