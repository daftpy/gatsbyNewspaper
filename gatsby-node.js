/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
  const categoryTemplate = path.resolve('src/templates/categoryTemplate.js')
  const result = await graphql(`
    query {
      wpgraphql {
        posts {
          edges {
            node {
              id
              slug
            }
          }
        }
        categories {
          edges {
            node {
              categoryId
              slug
            }
          }
        }
      }
    }
  `)
  
  result.data.wpgraphql.posts.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: articleTemplate,
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
  result.data.wpgraphql.categories.edges.forEach(edge => {
    const cat = '/category/'
    const slug = cat.concat(edge.node.slug)
    createPage({
      path: slug,
      component: categoryTemplate,
      context: {
        id: edge.node.categoryId,
      },
    })
  })
}