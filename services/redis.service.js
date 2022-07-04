const { createClient } = require('redis');
const client = createClient();

client.connect().then();

module.exports = {
  setNumber: async (key, value) => {
    try {
      return client.set(`fib${key}`, value);
    } catch (e) {
      throw new Error(e.message);
    }
  },

  getValue: (key) => {
    try {
      return client.get(`fib${key}`);
    } catch (e) {
      return;
    }
  }
}
