import React, { PropTypes } from 'react';
import Search from './SearchWidget';

export default class MainWidget extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <Search />
        <DatePicker />
        <GuestDropDown />
      </div>
    );
  }
}
