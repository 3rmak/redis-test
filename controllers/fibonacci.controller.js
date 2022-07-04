const fibonacciService = require('../services/fibonacci-counter.service');
const ticketService = require('../services/ticket.service');
const redisService = require('../services/redis.service');

module.exports = {
  postNumber: async (req, res) => {
    try {
      const { number } = req.body;

      const ticketPromise = new Promise((resolve) => {
        resolve(ticketService.createTicket(number).then((ticket) => ({ ticket: ticket._id })));
      });
      const fibonacciPromise = new Promise((resolve) => {
        setTimeout(() =>
            resolve(fibonacciService.countFibonacciNumber(number).then((number) => ({ number: number }))),
          2000
        )
      });

      const response = await Promise.race([ticketPromise, fibonacciPromise]);
      console.log('response', response)
      res.send(response);
    } catch (e) {
      res.send({ message: e.message });
    }
  },

  getFibonacciValueByTicket: async (req, res) => {
    try {
      const { ticket } = req.body;
      const dbTicket = await ticketService.getTicket(ticket);
      const fibValue = await redisService.getValue(dbTicket.number);

      res.send( fibValue ? { Fibonacci: fibValue } : { message: 'not found' });
    } catch (e) {
      res.send({ message: e.message });
    }
  }
}