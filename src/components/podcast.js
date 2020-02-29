import React from "react"
import {useStaticQuery, graphql } from "gatsby"

export default (props) => {
  return (
    <podcast>
      <div className="flex flex-col sm:flex-row m-auto max-w-screen-xl p-8 items-center">
        <div className="w-40 min-w-40">
          <img  className="shadow-xl" src="https://reason.com/wp-content/uploads/powerpress/interviewwithNG-podcast.jpg" />
        </div>
        <div className="sm:pl-6 mt-6 sm:mt-0">
          {props.inSidebar ? 
            <h2 className="text-md md:text-md font-bold italic text-center sm:text-left">Podcast</h2>
          :
            <h2 className="text-xl md:text-2xl font-bold italic text-center sm:text-left">Podcast</h2>
          }
          {props.inSidebar ? 
            <p className="text-xs text-center sm:text-left">{props.podcastTitle}</p>
          :
            <h3 className="text-sm md:text-xl font-bold text-center sm:text-left">{props.podcastTitle}</h3>
          }
          <p className="font-light text-sm md:text-lg lg:text-2xl text-center sm:text-left">{props.podcastDescription}</p>
        </div>
      </div>
    </podcast>
  )
}