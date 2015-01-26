(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$timeout', 'config', 'logger','$state','routerHelper'];
    /* @ngInject */
    function ShellController($timeout, config, logger, $state, routerHelper) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;

        activate();

        function activate() {
                getNavRoutes();

            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            var menuName = route.title;
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            return $state.current.title.substr(0, menuName.length) === menuName ? 'active' : '';
        }
    }
})();
