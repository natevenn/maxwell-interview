import React, { PropTypes } from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super()

    this.state = {
      startDate: moment(),
      endDate: moment().add(2, 'day')
    }
  }

  renderOptions(num) {
    let items = []
    for(let i=1; i <= num; i++) {
    let guests = i > 1 ? "guests" : "guest"
     items.push(<option key={i} value={i}>{i + " " + guests}</option>)
    }
    return items
  }

  handleStartDate(date) {
    this.setState({
      startDate: date,
      endDate: moment(date).add(1, 'day')
    })
  }

  handleEndDate(date) {
    this.setState({
      endDate: date
    })
  }

  handleSearch(e) {
    e.preventDefault();
    let location = this.location.value;
    let guests = this.guests.value;
    if(this.location.value === '') this.location.placeholder = 'please enter a destination'
    else this.props.handleSearch(location, guests)
  }

  render() {
    let guestLimit = 16
    return (
      <div className="search-bar-div">
          <span className='search-bar-elements'>
            <label
              className="where-label">
              Where
            </label>
            <input
              ref={(location) => this.location = location}
              type="text"
              className="location"
              placeholder="Denver, CO"
            />
          </span>
          <span className='search-bar-elements'>
            <label className="when-label">Check in</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartDate.bind(this)}
            />
          </span>
          <span className='search-bar-elements'>
            <label className="when-label">Check out</label>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleEndDate.bind(this)}
            />
          </span>
          <span className='search-bar-elements'>
            <label className="guest-label">Guests</label>
            <select
              className="guests"
              ref={(guests) => this.guests = guests}>
              {this.renderOptions(guestLimit)}
            </select>
          </span>
          <button
            className='search-button'
            onClick={this.handleSearch.bind(this)}>
            Search
          </button>
      </div>
    )
  }
}
