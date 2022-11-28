import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabId = () => {
    updatedActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabId}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
