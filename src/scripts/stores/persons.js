import Reflux from 'reflux'
import personsActions from '../actions/persons.js'

var person = {
  loading: false,
  data: [{
    name: 'Dr. Blaze',
    age: 30,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/picard102/128.jpg'
  }]
};

var store = Reflux.createStore({
  listenables: [personsActions],

  onUpdateAge() {
    person.data[0].age = Math.floor(Math.random() * 100);
    setTimeout(() => {
      this.trigger({ person });
    }.bind(this), 1000);
  },

  getInitialState() {
    return { person };
  }
});

export default store;
