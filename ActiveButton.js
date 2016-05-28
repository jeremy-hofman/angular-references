angular.module('app',[])
  .controller('AppController', appCtrl);
  
appCtrl.$inject = ['$scope'];
function appCtrl($scope) {
  var vm = this;
  $scope.title = 'CSS Active Button Selection' ;
  $scope.description = 'This plunk performs element checking \n' + 
    'utilizing CSS classes to determine the \nactive button.';
  
  $scope.showSelected = function showSelected() {
    alert('All Elements selected: ' + $scope.allElements +
      '\nNo Elements selected: ' + $scope.noElements); 
  }
}
