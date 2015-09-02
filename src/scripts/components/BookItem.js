import React from 'react'

let BookItem = React.createClass({
  render() {
    return (
      <div>
        {this.props.book.Title}<br />
        <img src={this.props.book.Image} />
      </div>
    )
  }
});

export default BookItem;
