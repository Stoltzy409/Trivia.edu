(function () {
  "use strict";
  var app = angular.module('app', ['ngMaterial', 
                                   'ui.router',
                                   'te.dashboard']);
  app.config(routeConfig);
  
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('notFound');
    
    $stateProvider.state('dashboard', {
      url:'/',
      templateUrl: './src/client/app/dashboard/dashboard.html'
    });
  }
})();