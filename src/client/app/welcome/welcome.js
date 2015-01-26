/**
 * Created by Stoltz on 1/25/15.
 */
(function(){
    'use strict';

    angular
        .module('app.welcome')
        .controller('WelcomeController',WelcomeController);

    WelcomeController.$inject = ['config', 'logger'];

    function WelcomeController(config, logger){
        var vm = this;

        vm.title = 'Welcome';


        activate();

        function activate(){
            logger.info('Activated Welcome View');
        }
    }
}());

