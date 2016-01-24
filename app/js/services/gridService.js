/*
* 'getEmployeeDataService' is service for getting the data from json file
* $http service is used to get data from json file. 
*/

angular.module('gridApp').service('getEmployeeDataService',function($http){
	var empDataService = {
    getEmployeeData: function(tabSource) {
        var employeeData = $http.get('data/employee.json').then(function(response){
          return response.data;
        },
        function(response) {
          return "data not found";
        });
      return employeeData;
    }
  };
  return empDataService;
});

