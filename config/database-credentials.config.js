const username = process.env.DATABASE_USERNAME || 'admin';
const password = process.env.DATABASE_PASSWORD || 'admin';

module.exports = {
  MONGODB_URL: `mongodb+srv://${username}:${password}@cluster0.67qwspr.mongodb.net/?retryWrites=true&w=majority`,
}