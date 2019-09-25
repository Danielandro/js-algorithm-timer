const { timer } = require('./algoTimer');

describe('#timer', () => {
  test('run returns true', () => {
    expect(timer()).toEqual('hello');
  })
})


