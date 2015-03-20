angular.module('sumator').factory('Sumator', function () {
  function Sumator() {
  }

  Sumator.prototype.sum = function (data) {
    var sum = 0, i, len = data.length;

    for (i = 0; i < len; i++) {
      sum += data[i];
    }

    return sum;
  };

  return Sumator;
});