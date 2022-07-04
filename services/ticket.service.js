const uuid = require('uuid');

const Ticket = require('../models/ticket.model');

module.exports = {
  createTicket: async (number) => {
    try {
      const ticketId = uuid.v4();
      console.log('v4', ticketId);
      console.log('number', number);

      const ticket = await Ticket.create({ id: ticketId, number });
      console.log('ticket', ticket);

      return ticket;
    } catch (e) {
      throw new Error(e);
    }
  },

  getTicket: async (ticketId) => {
    try {
      const ticket = await Ticket.findById(ticketId);
      if (!ticket) {
        throw new Error('ticket with id was not found');
      }

      return ticket;
    } catch (e) {
      throw new Error(`Ticket getting error, ${e.message}`);
    }
  }
}