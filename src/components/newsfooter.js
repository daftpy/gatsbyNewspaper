import React from "react"
import {useStaticQuery, graphql } from "gatsby"

import Categories from "../components/categories"

export default (props) => {
  return (
    <newsfooter>
      <div className="flex flex-col justify-center m-auto max-w-screen-xl text-white">
        <div className="flex flex-col md:flex-row w-full">
          <div className="p-4 md:w-1/2 text-left ">
            <Categories />
          </div>
          <div className="p-4 text-left md:w-1/2">
            <h3 className="text-xl">Contact</h3>
            <p>contact@gmail.com</p>
          </div>
        </div>
        <div className="py-4">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </newsfooter>
  )
}