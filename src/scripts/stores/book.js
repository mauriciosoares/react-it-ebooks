import Reflux from 'reflux';
import BookActions from '../actions/book.js';
import axios from 'axios';

const API_URL = 'http://it-ebooks-api.info/v1/search/';

let _books = [];

let store = Reflux.createStore({
  listenables: [BookActions],

  // onInitCompleted(data) {
  //   console.log(data);
  // },

  init() {
    console.log('inited');
    debugger;
    this.listenTo(BookActions.load.completed, this.loadCompleted)
  },

  loadCompleted(data) {
    console.log(data);
  },

  onUpdateAge() {
    this.trigger({ _books });
  },

  getInitialState() {
    // this.fetchApi('web development');
    return { _books };
  },

  // fetchApi(search) {
    // axios.get(API_URL + search).then(this.onDone.bind(this));
  // },

  onDone(data) {
    _books = data.data.Books;
    this.trigger({ _books });
  }
});

export default store;
