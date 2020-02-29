import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import Podcast from "../components/podcast"
import LatestStories from "../components/lateststories"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.wpgraphql.post
  const date = new Date(post.date)
  return (
    <Layout siteName={data.site.siteMetadata.title} >
      <SEO title={post.title} />
      <div className="md:flex justify-around max-w-screen-xl m-auto">
        <div className="w-full md:w-2/3 mt-8 pl-4 pr-4 md:pr-8">
          {post.featuredImage && 
            <img className="rounded-sm w-full flex-shrink-0" src={post.featuredImage.sourceUrl} />
          }
          <h1 className="text-2xl">{post.title}</h1>
          <div className="flex pb-2">
            <div className="uppercase tracking-wide text-sm text-red-600 font-bold article-category">
              <Link to={'/category/' + post.categories.nodes[0].slug} >{post.categories.nodes[0].name}</Link>
            </div>
            <div className="ml-2 uppercase tracking-wide text-sm text-gray-600 font-bold article-date">{date.toDateString()}</div>
          </div>
          <div
            className="article-content text-gray-900 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="flex flex-col sm:flex-row md:flex-col items-center">
            <Newsletter />
            <Podcast inSidebar={true} podcastTitle="Has Trump Drained the Swamp or Stocked It With His Own Fish?"/>
          </div>
          <div>
            <LatestStories stopDupe={post.title} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const postQuery = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        slug
        content
        date
        excerpt
        featuredImage {
          sourceUrl
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
