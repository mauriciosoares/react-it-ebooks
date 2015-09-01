import Reflux from 'reflux';
import personsActions from '../actions/persons.js';
import axios from 'axios';

const API_URL = 'http://it-ebooks-api.info/v1/search/';

var person = [];

var store = Reflux.createStore({
  listenables: [personsActions],

  onUpdateAge() {
    person[0].age = Math.floor(Math.random() * 100);
    this.trigger({ person });
  },

  getInitialState() {
    this.fetchApi();
    return { person };
  },

  fetchApi() {
    axios.get(API_URL + 'web development').then(this.onDone.bind(this));
  },

  onDone(data) {
    console.log('on done');
    person = data.data.Books;
    this.trigger({ person });
  }
});

export default store;
