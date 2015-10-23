(function(){
  "use strict";
  var dashboard = angular.module('te.dashboard', []);
  
  dashboard.controller('dashboardCtrl', dashboardCtrl);
  
  function dashboardCtrl(){
    this.title = 'Hello';
  };
})();