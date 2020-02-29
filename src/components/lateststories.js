import React from "react"
import {useStaticQuery, graphql } from "gatsby"

import ArticlePreview from "./articlepreview"

export default (props) => {
  const posts = useStaticQuery(graphql`
  query {
    wpgraphql {
      posts(where: {categoryNotIn: ["2"], tagNotIn: ["4"]}, first: 4) {
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
        <h2 className="text-xl mt-8 md:mt-4">Latest Stories</h2>
        {posts.wpgraphql.posts.edges.map((node) => {
          // Check to make sure the latest article is not
          // the same one reader is currently viewing
          if (props.stopDupe === node.node.title) {
            return null
          } else {
            return (
              <ArticlePreview 
                articleTitle={node.node.title}
                articleCategory="National"
                articleExcerpt={node.node.excerpt}
                articleImage={node.node.featuredImage ? node.node.featuredImage.sourceUrl : null}
                articlePath={node.node.slug}
              />
            )
          }
        })}

      </div>
    </lateststories>
  )
}

