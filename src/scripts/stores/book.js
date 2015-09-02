import Reflux from 'reflux';
import bookActions from '../actions/book.js';
import axios from 'axios';

const API_URL = 'http://it-ebooks-api.info/v1/search/';

let _books = [];

let store = Reflux.createStore({
  listenables: [bookActions],

  onUpdateAge() {
    // person[0].age = Math.floor(Math.random() * 100);
    this.trigger({ _books });
  },

  getInitialState() {
    this.fetchApi();
    return { _books };
  },

  fetchApi() {
    axios.get(API_URL + 'web development').then(this.onDone.bind(this));
  },

  onDone(data) {
    _books = data.data.Books;
    this.trigger({ _books });
  }
});

export default store;
