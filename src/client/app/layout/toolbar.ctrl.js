(function (){
  'use strict';
  angular.module('app').controller('toolbarCtrl', toolbar);

  function toolbar($mdSidenav){
    this.toggleSideNav = function(){
      $mdSidenav('left').toggle();
    };
  }
})();
