
/*
* This is main controller for communicating with view and service.
* 'getEmployeeDataService' is used for invoking the service for grid data.
*/
var app = angular.module('gridApp', []);
app.controller('MainCtrl', function ($scope, getEmployeeDataService) {
	$scope.sortType     = 'employeeid'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
	$scope.user = 'Arti Agrawal'; // just for displying the username
	$scope.datasorce = 'Json File'; // source of employee json data file
	getEmployeeDataService.getEmployeeData().then(function(empdata) {
	    $scope.empDetails = empdata; // representing the employee data 
	});
});
