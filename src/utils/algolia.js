const postQuery = `{
  wpgraphql {
    posts {
      edges {
        node {
          id
          title
          slug
          date
          excerpt
          categories {
            nodes {
              name
              categoryId
            }
          }
        }
      }
    }
  }
}
`
const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
}))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.wpgraphql.posts.edges),
    indexName: `Posts`,
    settings,
  },
]
module.exports = queries