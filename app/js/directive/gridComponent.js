/*
* 'myGridComponent' is custome element directive for creating grid
* 
*/
angular.module('gridApp').directive('myGridComponent', function() {
  	return {
  		restrict:'E', // representing element directive 
  		scope:{
  			//representing Isolated scope two way binding for sortType, sortReverse and empDetails
  			sortType: '=',  
  			sortReverse: '=',  
			empDetails: '='
  		},
  		templateUrl: "template/table.html" // template for custom directive 
  	}
});
