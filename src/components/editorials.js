import React from "react"
import { Link } from "gatsby"
import {useStaticQuery, graphql } from "gatsby"

export default (props) => {
  const editorials = useStaticQuery(graphql`
  query {
    wpgraphql {
      posts(where: {categoryIn: "2"}, first: 4) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  }
  `
  )
  return (
    <editorials className="flex flex-col flex-grow justify-between px-4 md:px-0 md:pr-6 pt-4 md:pt-8 w-full">
      {editorials.wpgraphql.posts.edges.map((node) => (
        <div className="my-6 md:my-0">
          <h4 className="text-sm text-blue-600 font-bold uppercase">Editorial</h4>
          <h3><Link to={node.node.slug}>{node.node.title}</Link></h3>
        </div>
      ))}
    </editorials>
  )
}