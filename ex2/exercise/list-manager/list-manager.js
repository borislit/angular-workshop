/* global angular */

angular.module('myApp', []);

angular.module('myApp').component('myComponent', {
  restrict: 'E',
  bindings: {
    attr: '@'
  },
  templateUrl: 'list-manager/list-manager.html',
  controller: function () {

    this.foo = 'bar';

    this.doFoo = function (item) {
      console.log('bar');
    }
  }
});
