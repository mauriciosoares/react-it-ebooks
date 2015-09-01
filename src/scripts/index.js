import React from 'react'
import Reflux from 'reflux'
import personStore from './stores/persons'
import personActions from './actions/persons'
import _ from 'lodash'


var App = React.createClass({
  mixins: [Reflux.connect(personStore)],

  componentWillUpdate() {

  },

  render() {
    var books = this.state.person.map((book) => {
      return (
        <div key={book.ID}>
          {book.Title}<br />
          {book.Description}<br />
          <img src={book.Image} />
        </div>
      )
    })

    return(
      <div onClick={personActions.updateAge}>
        {books}
      </div>
    )
  }
});

React.render(<App />, document.body);
