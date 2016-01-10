/* global angular */

angular.module('myApp', []);

angular.module('myApp').component('listManager', {
  restrict: 'E',
  bindings: {
    title: '@'
  },
  templateUrl: 'list-manager/list-manager.html',
  controller: function (inventoryService) {
    this.inventory = inventoryService.getInventory();
    this.selectedItems = [];
    this.selectItem = function (item) {
      var selectedItemIndex = this.inventory.indexOf(item);
      this.inventory.splice(selectedItemIndex, 1);

      this.selectedItems.push(item);
    }
  }
});