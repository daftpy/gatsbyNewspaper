import React from "react"
import { Link } from "gatsby"
import {useStaticQuery, graphql } from "gatsby"
import ArticlePreview from "./articlepreview"

export default (props) => {
  const editorials = useStaticQuery(graphql`
  query {
    wpgraphql {
      posts(where: {categoryIn: "8"}, first: 4) {
        edges {
          node {
            title
            slug
            excerpt
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
  `
  )
  return (
    <sports>
      {editorials.wpgraphql.posts.edges.map((node) => (
        <ArticlePreview
          articleTitle={node.node.title}
          articlePath={node.node.slug}
          articleCategory={node.node.categories.nodes[0].name}
          articleExcerpt={node.node.excerpt}
        />
      ))}
    </sports>
  )
}