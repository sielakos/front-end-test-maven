describe('Sumator', function () {
  var sumator;

  beforeEach(module('sumator'));

  beforeEach(inject(function (Sumator) {
    sumator = new Sumator();
  }));

  it('calculates sum of given numbers', function () {
    expect(sumator.sum([3, 2, 10])).toBe(15);
  });
});