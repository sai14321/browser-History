import {Component} from 'react'
import BrowserList from '../BrowserList'
import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  updateList = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachBrowsed =>
      eachBrowsed.list.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="background">
        <div>
          <nav className="headingContainer">
            <div className="imgLogo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                className="logo"
                alt="domainLogo"
              />
            </div>
            <div className="historySearch">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="searchIcon"
                alt="search"
                htmlFor="searchIIcon"
              />
              <input
                type="search"
                placeholder="Search History"
                className="inputSearch"
                id="searchIIcon"
              />
            </div>
          </nav>
        </div>
        <div className="container">
          <ul>
            {searchResults.map(each => (
              <BrowserList
                key={each.id}
                list={each}
                updateList={this.updateList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
