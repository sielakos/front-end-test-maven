angular.module('sumator').controller('sumator', function (Sumator) {
  var sumator = new Sumator();

  this.input = '1, 2';
  this.sum = function () {
    var list = this.input.split(',').map(function (value) {
      return parseFloat(value);
    });

    return sumator.sum(list);
  };
});