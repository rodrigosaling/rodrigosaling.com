/* eslint-disable no-undef */
// const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// https://gist.github.com/codeguy/6684588?permalink_comment_id=3426313#gistcomment-3426313
function slugify(sentence, separator = '-') {
  return sentence
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the accent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
}

// https://paulie.dev/posts/2022/09/mdx-2-breaking-changes-and-gatsby-plugin-mdx-v4-slug/
exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    // const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slugify(node.frontmatter.title),
    });
  }
};

// https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/
exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/blog-post.tsx');

  const { data } = await graphql(`
    query posts {
      allContentfulBlogPost(filter: { node_locale: { eq: "pt-BR" } }) {
        nodes {
          id
          title
          slug
          node_locale
          summary
          createdAt
          updatedAt
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
        content: node.content.childMarkdownRemark.html,
      },
    });
  });

  // const { data } = await graphql(`
  //   query {
  //     allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "blog" }
  //         childrenMdx: {
  //           elemMatch: { frontmatter: { isPublished: { eq: true } } }
  //         }
  //       }
  //     ) {
  //       nodes {
  //         childMdx {
  //           fields {
  //             slug
  //           }
  //           internal {
  //             contentFilePath
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // data.allFile.nodes.forEach((node) => {
  //   const { slug } = node.childMdx.fields;
  //   actions.createPage({
  //     path: `blog/${slug}`,
  //     // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#layouts
  //     component: `${postTemplate}?__contentFilePath=${node.childMdx.internal.contentFilePath}`,
  //     context: { slug },
  //   });
  // });
};
