var PROJECT_ROOT = require('path').resolve(__dirname).replace(/gulp/, '');

var config = {
  scripts: {
    src: PROJECT_ROOT + '/app/index.js',
    dest: {
      path: PROJECT_ROOT + '/build/js',
      src: 'bundle.js'
    }
  }
};

module.exports = config;
