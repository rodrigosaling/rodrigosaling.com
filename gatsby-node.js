exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'Mdx',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s) => new Date(s.frontmatter.date) > new Date(),
        },
      },
    }),
  ]);
};
