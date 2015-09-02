import Reflux from 'reflux';
import bookActions from '../actions/book.js';
import axios from 'axios';

const API_URL = 'http://it-ebooks-api.info/v1/search/';

let _books = [];

let store = Reflux.createStore({
  listenables: [bookActions],

  onUpdateAge() {
    this.trigger({ _books });
  },

  getInitialState() {
    this.fetchApi('web development');
    return { _books };
  },

  fetchApi(search) {
    axios.get(API_URL + search).then(this.onDone.bind(this));
  },

  onDone(data) {
    _books = data.data.Books;
    this.trigger({ _books });
  }
});

export default store;
