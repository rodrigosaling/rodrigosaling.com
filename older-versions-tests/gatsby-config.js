module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.rodrigosaling.com/',
    title: 'rodrigosaling.com',
    author: 'Rodrigo Saling',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'old-blog-archive',
    //     path: './content/old-blog-archive/',
    //   },
    //   __key: 'old-blog-archive',
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'blog',
    //     path: './content/blog/',
    //   },
    //   __key: 'old-blog-archive',
    // },
  ],
};