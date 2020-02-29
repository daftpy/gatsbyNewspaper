import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import Editorials from "../components/editorials"
import Podcast from "../components/podcast"
import ArticlePreview from "../components/articlepreview"
import { graphql } from "gatsby"
import { node } from "prop-types"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <Layout >
      <div className="flex flex-col p-4 justify-around max-w-screen-xl m-auto">
        {data.wpgraphql.posts.edges.map((node) => (
          <ArticlePreview
            articleTitle={node.node.title}
            articleExcerpt={node.node.excerpt}
            articlePath={node.node.slug}
          />
        ))}
      </div>
    </Layout>
  )
}
export const postQuery = graphql`
  query($id: Int!) {
  wpgraphql {
    posts(where: {categoryId: $id}) {
        edges {
        node {
            id
            slug
            title
            excerpt
          }
        }
      }
    }
  }
`