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
      errorMessages: []
    }

    this.updateState = this.updateState.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  updateState(key, value) {
    this.setState({[key]: value})
  }

  handleSearch(e) {
    e.preventDefault();
    this.validateInputs();
  }

  validateInputs() {
    let errorMessage = []
    if(this.state.location === '') {errorMessage.push("Please choose a location")}
    if(this.state.checkin === '') { errorMessage.push("Please choose a checkin date")}
    if(this.state.checkout === '') { errorMessage.push("Please choose a checkout date")}
    this.setState({errorMessages: errorMessage})
    //else this.props.handleSearch(location, guests)
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
