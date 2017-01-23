import React, { PropTypes } from 'react';

export default class GuestDropDown extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  renderOptions(num) {
    let items = []
    for(let i=1; i <= num; i++) {
    let guests = i > 1 ? "guests" : "guest"
     items.push(<option key={i} value={i}>{i + " " + guests}</option>)
    }
    return items
  }

  handleChange() {
    this.props.updateState('guests', this.guests.value)
  }

  render() {
    return (
      <div className="search-bar-div">
        <span className='search-bar-elements'>
          <label className="guest-label">Guests</label>
          <select
            className="guests"
            onChange={this.handleChange}
            ref={(guests) => this.guests = guests}>
            {this.renderOptions(16)}
          </select>
        </span>
      </div>
    )
  }
}
