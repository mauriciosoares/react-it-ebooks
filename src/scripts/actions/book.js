import Reflux from 'reflux'
import axios from 'axios';

let Actions = Reflux.createActions({
  load: {
    asyncResult: true
  }
});

Actions.load.listen(function(search) {
  axios
    .get('http://it-ebooks-api.info/v1/search/' + search)
    .then(this.completed);
});

export default Actions;
