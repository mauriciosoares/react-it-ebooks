var PROJECT_ROOT = __dirname.replace(/gulp/, '');

var config = {
  shared: {
    PROJECT_ROOT: PROJECT_ROOT
  },
  scripts: {
    src: PROJECT_ROOT + 'app/index.js',
    dest: {
      path: PROJECT_ROOT + 'build/js',
      src: 'bundle.js'
    }
  }
};

module.exports = config;
