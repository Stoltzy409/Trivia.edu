/**
 * Created by Stoltz on 1/25/15.
 */
(function (){
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController',LoginController);

    LoginController.$inject = ['config','logger'];
    /* @ngInject */
    function LoginController(config, logger){
        var vm = this;
        vm.title = 'Login';
        vm.navBrand = config.appTitle;

        activate();

        function activate(){
            logger.success('Login Has been Activated');
        }
    }

}());
