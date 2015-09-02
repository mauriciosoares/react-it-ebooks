import Reflux from 'reflux';
import bookActions from '../actions/book.js';
import axios from 'axios';

const API_URL = 'http://it-ebooks-api.info/v1/search/';

var books = [];

var store = Reflux.createStore({
  listenables: [bookActions],

  onUpdateAge() {
    // person[0].age = Math.floor(Math.random() * 100);
    this.trigger({ books });
  },

  getInitialState() {
    this.fetchApi();
    return { books };
  },

  fetchApi() {
    axios.get(API_URL + 'web development').then(this.onDone.bind(this));
  },

  onDone(data) {
    console.log('on done');
    books = data.data.Books;
    this.trigger({ books });
  }
});

export default store;
