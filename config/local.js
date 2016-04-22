module.exports = {
  port: process.env.PORT || 1337,
  ssl: {
    environment: process.env.NODE_ENV || 'development',
    key: require('fs').readFileSync(__dirname + '/ssl/key.pem'),
    cert: require('fs').readFileSync(__dirname + '/ssl/cert.pem')
  },
  connections: {
    'default': 'disk',
    disk: {
      module: 'sails-disk'
    }
  }
};
