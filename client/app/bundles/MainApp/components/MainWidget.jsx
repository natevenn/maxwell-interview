import React, { PropTypes } from 'react';
import DatePicker from './DatePickerWidget';
import GuestDropDown from './GuestDropDownWidget';
import LocationSearch from './LocationSearchWidget';
import Flash from './FlashWidget';


export default class MainWidget extends React.Component {
  constructor() {
    super()

    this.state = {
      location: '',
      guests: '1',
      checkin: '',
      checkout: '',
      errorMessages: [],
      listinging: []
    }

    this.updateState = this.updateState.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.serachListings = this.searchListings.bind(this);
  }

  componentWillMount() {
    window.parent.parseSearch = function(response) {
      let data = response.body
      this.renderListings(data)
    }
  }

  searchListings() {
    let locationUriEncoded = this.encodeUri(this.state.location)
    const script = document.createElement("script");
    script.type = "application/javascript";
    script.src = `https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t&location=${locationUriEncoded}&guests=${this.state.guests}&callback=parseSearch`;
    document.body.appendChild(script);
  }

  renderListings() {

  }

  encodeUri(value) {
    var replaceWhiteSpace = value.replace(/ /g, '%20');
    var replaceComma = replaceWhiteSpace.replace(/,/g, '%2C');
    var encodedLocation = replaceComma.concat("%2C%20US")
    return encodedLocation
  }

  updateState(key, value) {
    this.setState({[key]: value})
  }

  handleSearch(e) {
    e.preventDefault();
    if(this.validateInputs()) {
      this.searchListings()
    }
  }

  validateInputs() {
    let errorMessage = []
    let message = "Please choose a "
    if(this.state.location === '') {errorMessage.push(message + "location")}
    if(this.state.checkin === '') { errorMessage.push(message + "checkin date")}
    if(this.state.checkout === '') { errorMessage.push(message + "checkout date")}
    this.setState({errorMessages: errorMessage})
    return errorMessage.length === 0
  }

  render() {
    const flash = this.state.errorMessages.length > 0 ? <Flash messages={this.state.errorMessages} /> : ''

    return (
      <div className="container">
        <h1>Welcome</h1>
        {flash}
        <div className="search-bar-div">
          <LocationSearch updateState={this.updateState} />
          <DatePicker updateState={this.updateState} />
          <GuestDropDown updateState={this.updateState} />
          <button
            className='search-button'
            onClick={this.handleSearch.bind(this)}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
