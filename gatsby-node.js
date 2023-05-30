/* eslint-disable no-undef */
// const { createFilePath } = require('gatsby-source-filesystem');

// https://gist.github.com/codeguy/6684588?permalink_comment_id=3426313#gistcomment-3426313
function slugify(sentence, separator = '-') {
  return sentence
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the acent
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
