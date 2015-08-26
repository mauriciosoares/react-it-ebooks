var PROJECT_ROOT = __dirname.replace(/gulp/, '');

var config = {
  PROJECT_ROOT: PROJECT_ROOT,
  scripts: {
    src: PROJECT_ROOT + 'app/index.js',
    dest: {
      path: PROJECT_ROOT + 'build/js',
      src: 'bundle.js'
    }
  },

  sass: {
    src: PROJECT_ROOT + 'sass/**/*.sass',
    dest: PROJECT_ROOT + 'build/css',
  }
};

module.exports = config;
