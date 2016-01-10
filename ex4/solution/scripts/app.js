angular.module('myApp', ['ngRoute'])

angular.module('myApp').config(function ($routeProvider) {
  $routeProvider
    .when('/item-selection', {
      template: '<list-manager title="My List"></list-manager>'
    })
    .when('/selected', {
      template: '<selection-viewer></selection-viewer>'
    })
    .otherwise({
      redirectTo: '/item-selection'
    });
});