import React from "react"
import { Link } from "gatsby"
import {useStaticQuery, graphql } from "gatsby"

export default (props) => {
  return (
    <article className="border-b-2 last:border-b-0 sm:flex py-6 items-center">
      {props.articleImage &&
        <img className="sm:pr-4 rounded-sm sm:w-48 sm:h-32 w-full flex-shrink-0" src={props.articleImage} />
      }
      <div className="py-4 sm:py-0">
        <div className="article-category font-bold text-sm text-red-600 tracking-wide uppercase">{props.articleCategory}</div>
        <h3 className="mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
          <Link to={props.articlePath}>{props.articleTitle}</Link>
        </h3>
        <div
          className="mt-2 text-gray-700 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: props.articleExcerpt }}
        />
      </div>
    </article>
  )
}