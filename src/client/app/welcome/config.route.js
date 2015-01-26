/**
 * Created by Stoltz on 1/25/15.
 */
(function() {
    'use strict';

    angular
        .module('app.welcome')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'welcome',
                config: {
                    url: '/',
                    templateUrl: 'app/welcome/welcome.html',
                    controller: 'WelcomeController',
                    controllerAs: 'vm',
                    title: 'Welcome'
                }
            }
        ];
    }
})();

