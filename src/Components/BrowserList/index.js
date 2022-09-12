import './index.css'

const BrowserList = props => {
  const {initialHistory, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistory

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="BrowsedItem">
      <p className="para">{timeAccessed}</p>
      <div className="row">
        <img src={logoUrl} className="logoBrowsed" alt="domain logo" />
        <p className="socialMedia" id="logo">
          {title}
        </p>
        <p className="domainUrl" htmlFor="logo">
          {domainUrl}
        </p>
      </div>
      <div className="row2">
        <button
          type="button"
          className="btn"
          testID="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="deleteItem"
            alt="delete"
            id="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserList
