import React from 'react'
import Reflux from 'reflux'

import BookList from './BookList'

import bookStore from '../stores/book'
import bookActions from '../actions/book'
import _ from 'lodash'


let App = React.createClass({
  mixins: [Reflux.connect(bookStore)],

  render() {
    return(
      <div>
        <BookList books={this.state._books} />
      </div>
    )
  }
});

export default App;
