module.exports = {
  files: 'www',
  https: {
    key: './etc/localhost.key',
    cert: './etc/localhost.crt'
  },
  ignore: [
    './www/images'
  ],
  rewriteRules: [{
    match: /\?page=(\d+)/g,
    replace: 'page/$1'
  }, {
    match: /https:\/\/res\.cloudinary\.com\/tiepz\/image\/fetch\/(?:[\w\s,.])*\/https:\/\/tiepz\.com/g,
    replace: ''
  }],
  serveStatic: ['www'],
  serveStaticOptions: {
    extensions: ['html']
  }
};
