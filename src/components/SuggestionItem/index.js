import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchResults} = props
  const {suggestion} = suggestionDetails

  const addSearchResults = () => {
    updateSearchResults(suggestion)
  }

  return (
    <li className="suggestions-card-container">
      <p className="title">{suggestion}</p>
      <button className="button" type="button" onClick={addSearchResults}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-image"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
