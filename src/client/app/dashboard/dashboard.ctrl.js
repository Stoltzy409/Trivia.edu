(function () {
  "use strict";
  var dashboard = angular.module('te.dashboard', []);

  dashboard.controller('dashboardCtrl', dashboardCtrl);

  function dashboardCtrl(questionBuilderService) {
    var vm = this;
    questionBuilderService.fetchQuestions().then(function (data) {
      console.log('Data from service call in controller', data);
      vm.questions = data;
    });
  }
})();
