(function () {
    'use strict';

    angular
        .module('app.registration')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function RegistrationController($q, dataservice, logger) {
        var vm = this;

        activate();

        function activate() {
            logger.info('Activated Registration View');
        }
    }
})();
