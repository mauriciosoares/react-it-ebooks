import React from 'react';
import bookActions from '../actions/book'

const ENTER_KEY = 13;

let SearchInput = React.createClass({
  onKeyup(e) {
    // if(e.which === ENTER_KEY) bookActions.fetchApi(e.target.value);
  },

  render() {
    return (
      <input onKeyUp={this.onKeyup} />
    )
  }
});

export default SearchInput;
