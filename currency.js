var app = angular.module('app', []);

app.directive('container', function () {
    return {
        scope: {
            firstName: '=',
            lastName: '='
        },
        restrict: 'E',
        templateUrl: 'container.html',
        controllerAs: 'container',
        bindToController: true,
        controller: function(){
            console.log(this);
        },
        link: function(scope){
            //alert(scope.age);
        }
    }
});



app.controller('currencyController', function () {
    var vm = this;

    vm.admin = {
        firstName: 'John',
        lastName: 'Doe'
    };
});
