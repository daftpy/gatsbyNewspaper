import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headlines from "../components/headlines"
import Newsletter from "../components/newsletter"
import Editorials from "../components/editorials"
import Podcast from "../components/podcast"
import ArticlePreview from "../components/articlepreview"
import Sports from "../components/sports"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="md:flex justify-around max-w-screen-xl m-auto">
      <div className="w-full md:w-2/3">
        <Headlines />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col w-full md:w-1/3">
        <Newsletter />
        <Editorials />
      </div>
    </div>
    <div className="bg-indigo-100 mt-8">
      <Podcast
        podcastTitle="Has Trump Drained the Swamp or Stocked It With His Own Fish?"
        podcastDescription="Sinking in the Swamp authors Lachlan Markay and Asawin Suebsaeng are documenting all the president's grifters for The Daily Beast."
      />
    </div>
    <div className="md:flex justify-around max-w-screen-xl m-auto">
      <div className="flex flex-col md:flex-row mt-4">
        <div className="p-4 md:w-1/2 w-full">
          <h2 className="text-xl border-b-2 border-gray-900">Latest Stories</h2>
          {props.data.wpgraphql.posts.edges.map((node) => (
            <ArticlePreview
              articleTitle={node.node.title}
              articlePath={node.node.slug}
              articleCategory={node.node.categories.nodes[0].name}
              articleExcerpt={node.node.excerpt}
            />
          ))}
        </div>
        <div className="p-4 md:w-1/2">
          <h2 className="text-xl text-red-700 border-b-2 border-red-700">Sports</h2>
          {props.data.wpgraphql.posts.edges.map((node) => (
            <Sports />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
query HomePageQuery {
  wpgraphql {
    posts(where: {categoryNotIn: ["2","8"], tagNotIn: ["4"]}, first: 4) {
      edges {
        node {
          slug
          title
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

export default IndexPage
