import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import algoliasearch from 'algoliasearch/lite';import { 
  InstantSearch, 
  SearchBox, 
  Hits, 
  Configure 
 } from 'react-instantsearch-dom';
 import { CustomHits } from "./searchbox";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: false,
      hasInput: false,
      refresh: false,
      isVisible: false,
      currentPage: 0
    };
  }
  toggleVisible = () => {
    console.log('clicked')
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      };
    })
  }

  render() {
    const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
    return (
      <header>
        <div className="bg-blue-700 text-white">
          <div className="flex justify-between max-w-screen-xl mx-auto py-2 px-4">
            <div className="font-bold text-white text-2xl">
              <Link to="/"><h1>{this.props.siteTitle}</h1></Link>
            </div>
            <ul className="article-category hidden md:visible md:flex justify-between text-center text-sm items-center">
              <li className="mx-4">
                <Link to="/category/local">Local</Link>
              </li>
              <li className="mx-4">
                <Link to="/category/state">State</Link>
              </li>
              <li className="mx-4">
                <Link to="/category/national">National</Link>
              </li>
              <li className="mx-4">
                <a href="#">Economy</a>
              </li>
              <li className="mx-4">
                <Link to="/category/editorial">Editorial</Link>
              </li>
              <li className="ml-4">
                <button onClick={this.toggleVisible}>Search</button>
              </li>
            </ul>
            <div className="md:hidden my-auto"><button onClick={this.toggleVisible}>=<i class="fas fa-bars"></i></button></div>
          </div>
        </div>
        { this.state.isVisible && 
          <div id="searchBar" className="bg-blue-600 p-4">
            <ul className="article-category md:hidden text-center text-white">
                <li>
                  <Link to="/category/local">Local</Link>
                </li>
                <li className="my-4">
                  <Link to="/category/state">State</Link>
                </li>
                <li className="my-4">
                  <Link to="/category/national">National</Link>
                </li>
                <li className="my-4">
                  <a href="#">Economy</a>
                </li>
                <li className="my-4">
                  <Link to="/category/editorial">Editorial</Link>
                </li>
                <li className="my-4">
                  <button onClick={this.toggleVisible}>Search</button>
                </li>
              </ul>
            <div className="flex flex-col max-w-screen-xl m-auto">
              {/* <input className="mx-4 rounded-sm flex-shrink min-w-0 w-full" type="text" />
              <button className="bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-2 px-2 rounded-full" onClick={this.toggleVisible} >Search</button> */}
              <InstantSearch
              searchClient={searchClient}
              indexName="Posts"
              refresh="false"
              >
                <SearchBox
                  className="searchbox"
                  class="ais-SearchBox-input"
                    submit={<></>}
                    reset={<></>}
                  translations={{
                    placeholder: 'Search Newspaper',
                  }}
                  onKeyUp={(event) => {
                    this.setState({
                      hasInput: event.currentTarget.value !== '',
                    });
                  }}
                />
                <Configure hitsPerPage={5} page={this.state.currentPage} />
                <div className={!this.state.hasInput ? 'input-empty p-4' : 'input-value p-4'}>
                  <CustomHits hitComponent={Hits} />
                </div>
              </InstantSearch>
            </div>

          </div>
        }
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
