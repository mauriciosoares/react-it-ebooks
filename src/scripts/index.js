import React from 'react'
import Reflux from 'reflux'
import personStore from './stores/persons'
import personActions from './actions/persons'


var App = React.createClass({
  mixins: [Reflux.connect(personStore)],

  getInitialState() {
    return {
      loading: false
    }
  },

  componentWillUpdate() {
    console.log('test');
  },

  updateAge() {
    this.setState({
      loading: true
    });

    personActions.updateAge();
  },

  render() {
    var p = this.state.person;

    return(
      <div onClick={this.updateAge}>
        {this.state.loading.toString()}
        {p.age}
      </div>
    )
  }
});

React.render(<App />, document.body);
