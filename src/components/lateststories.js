import React from "react"
import {useStaticQuery, graphql } from "gatsby"

import ArticlePreview from "./articlepreview"

export default (props) => {
  const posts = useStaticQuery(graphql`
  query {
    wpgraphql {
      posts(where: {categoryNotIn: ["2","8"], tagNotIn: ["4"]}, first: 4) {
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
    <lateststories>
      <div className="px-4 md:px-0 md:pl-4 md:pr-12 pb-8">
        <h2 className="text-xl mt-4">Latest Stories</h2>
        {posts.wpgraphql.posts.edges.map((node) => (
          <ArticlePreview 
            articleTitle={node.node.title}
            articleCategory="National"
            articleExcerpt={node.node.excerpt}
            articleImage={node.node.featuredImage ? node.node.featuredImage.sourceUrl : null}
            articlePath={node.node.slug}
          />
        ))}
      </div>
    </lateststories>
  )
}