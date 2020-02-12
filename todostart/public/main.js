var demoApp = angular.module('demo',[]);
demoApp.controller('MainController',['$scope','guidService',function($scope,guidService){
    var vm = {};
    vm.list = [
        {_id:guidService.createGuid(),details:'Demo first item'},
        {_id:guidService.createGuid(),details:'Demo second item'}
    ];
    vm.addItem = function(){
        vm.list.push({
            _id:guidService.createGuid(),
            details: vm.newItemDetails
        });
        vm.newItemDetails = '';
    };
    vm.removeItem = function(itemToRemove){
        vm.list = vm.list.filter(function(item){return item._id !== itemToRemove._id;  });
    }
    vm.newItemDetails = '';
    $scope.vm = vm;
}])

demoApp.service('guidService', function () { return {
    createGuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } };
});