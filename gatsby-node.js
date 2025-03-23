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
// exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
//   if (node.internal.type === 'Mdx') {
//     // const slug = createFilePath({ node, getNode });
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slugify(node.frontmatter.title),
//     });
//   }
// };

// https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/
exports.createPages = async function ({ actions, graphql }) {
  // const postTemplate = path.resolve('./src/templates/blog-post.tsx');
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          id
          title
          slug
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  result.data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        slug: node.slug,
        content: node.content.childMarkdownRemark.html,
      },
    });
  });

  const resultTags = await graphql(`
    query {
      allContentfulTag {
        nodes {
          name
          contentful_id
        }
      }
    }
  `);

  resultTags.data.allContentfulTag.nodes.forEach((tag) => {
    createPage({
      path: `/tags/${tag.contentful_id}`,
      component: path.resolve('./src/templates/blog-tag.tsx'),
      context: {
        name: tag.name,
        contentfulId: tag.contentful_id,
      },
    });
  });

  // data.allFile.nodes.forEach((node) => {
  //   const slug = node.slug;
  //   actions.createPage({
  //     path: `blog/${slug}`,
  //     // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#layouts
  //     component: `${postTemplate}?__contentFilePath=${node.childMdx.internal.contentFilePath}`,
  //     context: { slug: slug },
  //   });
  // });
};
