import Reflux from 'reflux'
import axios from 'axios';

// let actions = Reflux.createActions([
//   'fetchApi'
// ]);

let Actions = Reflux.createActions({
  // init: {
  //   asyncResult: true
  // }

  load: {
    children: ['completed']
  }
});

// actions.init.listenAndPromise(axios.get('http://it-ebooks-api.info/v1/search/web development'))

window.a = axios;

Actions.load.listen(function() {
  console.log('teste');
  axios
    .get('http://it-ebooks-api.info/v1/search/web development')
    .then(this.completed);
});

export default Actions;
