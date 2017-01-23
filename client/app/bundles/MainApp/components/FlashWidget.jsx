import React, { PropTypes } from 'react';

export default class Flash extends React.Component {
  render() {
    return (
      <div className='alert alert-danger'>
          {this.props.messages.join(', ')}
      </div>
    )
  }
}
