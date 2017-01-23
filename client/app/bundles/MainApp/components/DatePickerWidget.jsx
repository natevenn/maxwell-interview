import React, { PropTypes } from 'react';
import Calander from 'react-datepicker';
import moment from 'moment';

//const date = moment().sub
export default class DatePicker extends React.Component {
  constructor() {
    super()

    this.state = {
      checkin: "",
      checkout: ""
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCheckin = this.handleCheckin.bind(this);
  }

  handleCheckin(date) {
    this.setState({ checkin: date })
    this.props.updateState('checkin', this.formatDate(date))
  }

  handleCheckout(date) {
    this.setState({ checkout: date })
    this.props.updateState('checkout', this.formatDate(date))
  }

  formatDate(date) {
    return date.format('YYYY-MM-DD')
  }

  update

  render() {
    return (
    <div className='search-bar-div'>
      <span className='search-bar-elements checkin-calander'>
        <label className="when-label">When</label>
        <Calander
          placeholderText="checkin"
          selected={this.state.checkin}
          onChange={this.handleCheckin}
        />
      </span>
      ->
      <span className='search-bar-elements checkout-calander'>
        <Calander
          placeholderText="checkout"
          selected={this.state.checkout}
          onChange={this.handleCheckout}
        />
      </span>
    </div>
    )
  }
}
