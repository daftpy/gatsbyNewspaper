import React from "react"
import { Link } from "gatsby"
import {useStaticQuery, graphql } from "gatsby"

export default (props) => {
  const categories = useStaticQuery(graphql`
  query {
    wpgraphql {
      categories {
        edges {
          node {
            categoryId
            name
            slug
          }
        }
      }
    }
  }  
  `
  )
  return (
    <categories>
      <h3>Categories</h3>
      <ul className="flex flex-wrap">
        {categories.wpgraphql.categories.edges.map((node) => (
          <li className="pr-4"><Link to={'/category/' + node.node.slug}>{node.node.name}</Link></li>
        ))}
      </ul>
    </categories>
  )
}