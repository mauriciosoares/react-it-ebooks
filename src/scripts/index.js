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
    console.log(this.state.person === personStore);
  },

  updateAge() {
    this.setState({
      loading: true
    });

    personActions.updateAge();
  },

  render() {
    var data = this.state.person.data.map((item, index) => <div key={index}>{item.age}</div>);

    return(
      <div onClick={this.updateAge}>
        {this.state.loading.toString()}
        {data}
      </div>
    )
  }
});

React.render(<App />, document.body);
