import React from 'react';
import { Link } from "gatsby"
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="ais-SearchBox">
  <form noValidate action="" role="search" className="ais-SearchBox-form">
    <input 
      className="ais-SearchBox-input"
      type="search"
      value={currentRefinement} 
      onChange={(event) => refine(event.currentTarget.value)}
    />
  </form>
</div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);// print out first and last characters around search term

const getSnippet = (excerpt, match) => {
  const index = excerpt.indexOf(match);
  console.log(excerpt.indexOf(match))
  return excerpt.substring(index - 50, index + 50);
  };
  
// only display Hits when user types in SearchBox
const Hits = ({ hits }) => (
<ul className="style text-white">
  {hits.map((hit) => (
    <li key={hit.title}>
      <Link to={hit.slug}>
        <h4 className="text-blue-900">{hit.title}</h4>
        <div
            className="article-content overflow-hidden"
            // dangerouslySetInnerHTML={{ __html: getSnippet(hit.excerpt,  hit._highlightResult.title.matchedWords[0]) }}
            dangerouslySetInnerHTML={{ __html: hit.excerpt }}
          />
     </Link>
    </li>
  ))}
</ul>
);

export const CustomHits = connectHits(Hits);