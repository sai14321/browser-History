import './index.css'

const BrowserList = props => {
  const {list, updateList} = props
  const {BrowsedHistory} = list

  const onClickSuggestion = () => {
    updateList(BrowsedHistory)
  }

  return (
    <li className="BrowsedItem">
      <p className="para">{BrowsedHistory.timeAccessed}</p>
      <div className="row">
        <img src={list.logoUrl} className="logoBrowsed" alt="logo" />
        <h1 className="socialMedia" id="logo">
          {list.title}
        </h1>
        <p className="domainUrl" htmlFor="logo">
          {list.domainUrl}
        </p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        className="deleteItem"
        alt="delete"
        onClick={onClickSuggestion}
      />
    </li>
  )
}

export default BrowserList
