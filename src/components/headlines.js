import React from "react"
import {useStaticQuery, graphql } from "gatsby"

import ArticlePreview from "./articlepreview"

export default (props) => {
  const posts = useStaticQuery(graphql`
  query {
    wpgraphql {
      posts(where: {tagSlugIn: "headline"}, first: 3) {
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
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `
  )
  return (
    <headlines>
      <div className="px-4 md:px-0 md:pl-4 md:pr-12 pb-8">
        <h2 className="text-3xl mt-8">Headlines</h2>
        {posts.wpgraphql.posts.edges.map((node) => (
          <ArticlePreview 
            articleTitle={node.node.title}
            articleCategory={node.node.categories.nodes[0].name}
            articleExcerpt={node.node.excerpt}
            articleImage={node.node.featuredImage ? node.node.featuredImage.sourceUrl : null}
            articlePath={node.node.slug}
          />
        ))}
      </div>
    </headlines>
  )
}