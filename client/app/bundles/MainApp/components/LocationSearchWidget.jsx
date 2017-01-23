import React, { PropTypes } from 'react';

export default class LocationSearch extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.updateState('location', this.location.value)
  }

  render() {
    return (
      <div className="search-bar-div">
      <span className='search-bar-elements'>
        <label
          className="where-label">
          Where
        </label>
        <input
          ref={(location) => this.location = location}
          onChange={this.handleChange}
          type="text"
          className="location"
          placeholder="Denver, CO"
        />
      </span>
    </div>
    )
  }
}
