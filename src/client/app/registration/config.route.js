/**
 * Created by Stoltz on 1/25/15.
 */
(function() {
    'use strict';

    angular
        .module('app.registration')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'registration',
                config: {
                    url: '/registration',
                    templateUrl: 'app/registration/registration.html',
                    controller: 'RegistrationController',
                    controllerAs: 'vm',
                    title: 'Registration',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-user"></i> Registration'
                    }
                }
            }
        ];
    }
})();
