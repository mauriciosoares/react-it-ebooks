import React from 'react'
import Reflux from 'reflux'
import bookStore from './stores/book'
import bookActions from './actions/book'
import _ from 'lodash'


var App = React.createClass({
  mixins: [Reflux.connect(bookStore)],

  componentWillUpdate() {

  },

  render() {
    var books = this.state.books.map((book) => {
      return (
        <div key={book.ID}>
          {book.Title}<br />
          {book.Description}<br />
          <img src={book.Image} />
        </div>
      )
    })

    return(
      <div onClick={bookActions.updateAge}>
        {books}
      </div>
    )
  }
});

React.render(<App />, document.body);
