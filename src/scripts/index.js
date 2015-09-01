import React from 'react'
import Reflux from 'reflux'
import personStore from './stores/persons'
import personActions from './actions/persons'
import _ from 'lodash'


var App = React.createClass({
  mixins: [Reflux.connect(personStore)],

  componentWillUpdate() {

  },

  updateAge() {
    this.setState({
      person: _.merge({data: this.state.person.data}, {loading: true})
    });

    personActions.updateAge();
  },

  render() {
    var data = this.state.person.data.map((item, index) => <div key={index}>{item.age}</div>);

    return(
      <div onClick={this.updateAge}>
        {this.state.person.loading.toString()}
        {data}
      </div>
    )
  }
});

React.render(<App />, document.body);
