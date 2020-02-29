import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const ArticleLayout = (props) => {
  return (
    <>
      <Header siteTitle={props.siteName} />
          <div className="flex md:w-2/3 mt-4 md:mr-4 flex-col">
            {props.children}
          </div>
    </>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteName: PropTypes.string,
}

export default ArticleLayout