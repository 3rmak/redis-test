const { getValue, setNumber } = require('./redis.service');

module.exports = {
  async countFibonacciNumber(number) {
    if(number < 2) {
      await setNumber(number, number);
      return number;
    }
    else {
      let underPrev = await getValue(number - 2);
      if (!underPrev) underPrev = await this.countFibonacciNumber(number - 2);

      let prev = await getValue(number - 1);
      if (!prev) prev = await this.countFibonacciNumber(number - 1);

      const sum = Number(prev) + Number(underPrev);
      await setNumber(number, sum);
      console.log('sum is :', sum);
      return sum;
    }
  }
}