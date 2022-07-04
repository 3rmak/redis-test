module.exports = {
  PORT: process.env.SERVER_PORT || 3001,
  DATABASE_MODEL_NAMES: require('./database-model-names.config'),
  DATABASE_CREDENTIALS: require('./database-credentials.config'),
}