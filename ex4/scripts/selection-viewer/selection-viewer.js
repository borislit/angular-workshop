angular.module('myApp').component('selectionViewer', {
  restrict: 'E',
  bindings: {
    title: '@'
  },
  templateUrl: 'scripts/selection-viewer/selection-viewer.html',
  controller: function (inventoryService) {
    this.selectedItems = inventoryService.selectedItems;
  }
});