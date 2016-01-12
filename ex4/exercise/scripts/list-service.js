angular.module('myApp').service('inventoryService', function(){
  this.getInventory = function() {
    return ['Bread','Streak', 'Eggs', 'Mufleta'];
  };

  this.selectedItems = [];
});