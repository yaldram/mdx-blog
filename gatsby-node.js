exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
                slug
            }
          }
        }
      }
    }
  `);

  // Create Paginated Posts
  const postPerPage = 3;

  const numPages = Math.ceil(data.allMdx.edges.length / 3);

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1
      }
    })
  });

  // Create Single Blog Post
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug;
//     const id = edge.node.id;
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: { id }
//     })
//   })

}