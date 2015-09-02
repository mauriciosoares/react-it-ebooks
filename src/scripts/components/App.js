import React from 'react'
import Reflux from 'reflux'

import BookList from './BookList'
import SearchInput from './SearchInput'

import bookStore from '../stores/book'
import _ from 'lodash'


let App = React.createClass({
  mixins: [Reflux.connect(bookStore)],

  render() {
    return(
      <div>
        <SearchInput />
        <BookList books={this.state._books} />
      </div>
    )
  }
});

export default App;
