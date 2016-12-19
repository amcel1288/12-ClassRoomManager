(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.title = 'HomeController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();