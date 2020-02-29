import React from "react"
import {useStaticQuery, graphql } from "gatsby"

export default (props) => {
  return (
    <newsletter>
      <div className="flex flex-col bg-gray-200 h-full justify-center p-10 w-full">
        <h3 className="text-center pb-2">Sign up for our newsletter</h3>
        <p className="text-xs text-center">Keep up with the latest local and national news. Get access to exclusive news and content.</p>
        <input className="mt-4 w-full" type="text" />
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 font-bold mt-4 py-2 px-4 rounded text-white text-xs">Subscribe</button>
        </div>
        <p className="text-xs mt-2 text-center">No spam, unsubscribe at anytime.</p>
      </div>
    </newsletter>
  )
}