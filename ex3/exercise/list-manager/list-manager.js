/* global angular */

angular.module('myApp', []);

angular.module('myApp').component('listManager',{
  restrict:'E',
  bindings: {
    title:'@'
  },
  templateUrl:'list-manager-solution/list-manager.html',
  controller: function(){
    this.inventory = ['Bread','Streak', 'Eggs', 'Mufleta'];
    this.selectedItems = [];
    this.selectItem = function(item){
      var selectedItemIndex = this.inventory.indexOf(item);
      this.inventory.splice(selectedItemIndex,1);

      this.selectedItems.push(item);
    }
  }
});