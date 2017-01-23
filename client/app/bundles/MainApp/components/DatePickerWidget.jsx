import React, { PropTypes } from 'react';
import Calander from 'react-datepicker';
import moment from 'moment';

export default class DatePicker extends React.Component {
  constructor() {
    super()

    this.state = {
      checkin: moment(),
      checkout: moment().add(1, 'day')
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCheckin = this.handleCheckin.bind(this);
  }

  handleCheckin(date) {
    this.setState({
      checkin: date,
      endDate: moment(date).add(1, 'day')
    })
    this.props.updateState('checkin', this.formatDate(this.state.checkin))
  }

  handleCheckout(date) {
    this.setState({ checkout: date })
    this.props.updateState('checkout', this.formatDate(this.state.checkout))
  }

  formatDate(date) {
    return date.format('YYYY-MM-DD')
  }

  update

  render() {
    return (
    <div className='search-bar-div'>
      <span className='search-bar-elements'>
        <label className="when-label">Check in</label>
        <Calander
          selected={this.state.checkin}
          onChange={this.handleCheckin}
        />
      </span>
      <span className='search-bar-elements'>
        <label className="when-label">Check out</label>
        <Calander
          selected={this.state.checkout}
          onChange={this.handleCheckout}
        />
      </span>
    </div>
    )
  }
}
