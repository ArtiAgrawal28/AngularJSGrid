/*
*  mainSpec is Spec file for main.js and gridService.js
*/
describe('gridApp', function () {
    
    describe('MainCtrl', function () {
        var scope, controller;
        beforeEach(function(){
            module('gridApp');
            inject(function ($rootScope, $injector, $controller) { 
                scope = $injector.get('$rootScope');
                controller = $controller('MainCtrl', { '$scope': scope });
            });
        });

        // to check controler is initialized or not
        it('Should Initialize main controller', function () { 
            expect(controller).toBeDefined(); 
        });

        it('Should show user name', function () { 
            expect(scope.user).toBe('Arti Agrawal'); 
        });

        it('By default employeeId should come in sorted order ', function () { 
            expect(scope.sortType).toBe('employeeid'); 
        });
    });

    
    describe('getEmployeeDataService', function() {
        var employeeDataService, httpBackend, scope;
        beforeEach(function(){
            module('gridApp');
            inject( function($rootScope, $injector, $httpBackend){
                scope = $injector.get('$rootScope');
                httpBackend = $httpBackend;
                successCallback = jasmine.createSpy();
                employeeDataService = $injector.get('getEmployeeDataService');
            });
        });
        
        it('grid service should be defined', function() {
          expect(employeeDataService).toBeDefined();
        });

        it('returns http requests successfully and retriving employee data ', function() {
            var data = [
                      {
                        "employeeid": 10100,
                        "name": "Jarge",
                        "salary": 6750000,
                        "designation": "Android Developer"
                      },
                      {
                        "employeeid": 10200,
                        "name": "Krishna",
                        "salary": 5660000,
                        "designation": "UI Developer"
                      },
                      {
                        "employeeid": 10300,
                        "name": "David",
                        "salary": 4570000,
                        "designation": "UX Desiner"
                      },
                      {
                        "employeeid": 10400,
                        "name": "Mark",
                        "salary": 3480000,
                        "designation": "Seniro Sales Manager"
                      },
                      {
                        "employeeid": 10500,
                        "name": "Rohit",
                        "salary": 2390000,
                        "designation": "CEO"
                      },
                      {
                        "employeeid": 10600,
                        "name": "Donald",
                        "salary": 1250000,
                        "designation": "Finance Manager"
                      }
                    ];
            httpBackend.expectGET('data/employee.json').respond(200, data);
            promise = employeeDataService.getEmployeeData();
            promise.then(successCallback);
            httpBackend.flush();
            expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
        });
    });
});

 