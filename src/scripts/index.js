import React from 'react'
import Reflux from 'reflux'

var person = {
  name: 'Dr. Blaze',
  age: 30,
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/picard102/128.jpg'
};

var actions = Reflux.createActions([
  'updateAge'
]);

var store = Reflux.createStore({
  listenables: [actions],

  onUpdateAge() {
    person.age = Math.random() * 100;
    setTimeout(() => {
      this.trigger({ person });
    }.bind(this), 1000)
  },

  getInitialState() {
    return { person };
  }
});

var App = React.createClass({
  mixins: [Reflux.connect(store)],

  getInitialState() {
    return {
      loading: false
    }
  },

  updateAge() {
    this.setState({
      loading: true
    });

    actions.updateAge();
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
