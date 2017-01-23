import React, { PropTypes } from 'react';
import DatePicker from './DatePickerWidget';
import GuestDropDown from './GuestDropDownWidget';
import LocationSearch from './LocationSearchWidget';

export default class SearchBar extends React.Component {
  constructor() {
    super()
  }

  handleSearch(e) {
    e.preventDefault();
    let location = this.location.value;
    let guests = this.guests.value;
    if(this.location.value === '') this.location.placeholder = 'please enter a destination'
    else this.props.handleSearch(location, guests)
  }

  render() {
    return (
    )
  }
}
