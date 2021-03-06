import React,{ Component } from 'react';
import '../css/wanderSearch.css';
import GlobePicture from '../images/jumbotron-image.jpg';

export default class WanderSearch extends Component {
  constructor(props) {
    super(props)

    this.state = { city: ""}
    this.handleCitySearch = this.handleCitySearch.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleCitySearch(e) {
    e.preventDefault();
    this.props.search(this.state.city);
  }
  render() {
    return (
      <div>
        <div className="search-card mdl-card__title">
          <h2 className="wander-msg">Lets Wander!</h2>
        </div>
        <div className="mdl-card__actions">
          <form onSubmit={this.handleCitySearch}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input"
                     type="text"
                     id="city"
                     name="city"
                     onChange={this.handleInputChange}/>
              <label className="mdl-textfield__label" htmlfor="city">What city?...</label>
            </div>
            <button className="submit-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
