module.exports = {
  port: process.env.PORT || 1337,
  ssl: {
    environment: process.env.NODE_ENV || 'development',
    key: require('fs').readFileSync(__dirname + '/ssl/key.pem'),
    cert: require('fs').readFileSync(__dirname + '/ssl/cert.pem')
  },
  connections: {
    'default': 'postgres',
    postgres: {
      adapter: 'sails-postgresql',
      database: 'skynda',
      host: 'localhost',
      user: 'deploy',
      password: 'devel',
      port: 5432,
      poolSize: 10,
      ssl: false
    },
    disk: {
      module: 'sails-disk'
    }
  }
};
