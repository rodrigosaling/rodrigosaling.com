import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } marcados com a tag '${tag}'`;

  return (
    <Layout>
      <SEO title={`Tag: ${tag}`} />
      <h1>{tagHeader}</h1>
      <Link to="/tags/">Ver todas as tags</Link>
      <div className="post-feed">
        {edges.map(({ node }) => {
          const { path, title, date } = node.frontmatter;
          return (
            <article key={path} className={'post-card'}>
              <h2>
                <Link to={path}>{title}</Link>
              </h2>
              <small>{date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt
                }}
              />
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

TagsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export default TagsTemplate;

export const tagsPageQuery = graphql`
  query SingleTagQuery($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY", locale: "pt-br")
          }
        }
      }
    }
  }
`;
