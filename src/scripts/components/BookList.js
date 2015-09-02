import React from 'react'
import BookItem from './BookItem'

let BookList = React.createClass({
  renderItems() {
    if (!this.props.books.length) {
      return <span>Vazio</span>
    }

    return this.props.books.map(book => <BookItem key={book.ID} book={book} />)
  },

  render() {
    return <div>{this.renderItems()}</div>
  }
});

export default BookList;
