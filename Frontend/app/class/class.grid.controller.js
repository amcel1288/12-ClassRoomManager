(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = ['classFactory'];

    /* @ngInject */
    function ClassGridController(classFactory) {
        var vm = this;
        vm.title = 'ClassGridController';
        vm.classes = [];
        vm.deleteClass = deleteClass;
        activate();
        ////////////////
        function activate() {
            classFactory
                .getAllClasses()
                .then(function(response) {
                    vm.classes = response.data;
                });
        }   
        function deleteClass(_class) {
            classFactory
                .deleteClass(_class.classId)
                .then(function(response) {
                    var index = vm.classes.indexOf(_class);
                    vm.classes.splice(index, 1);
            });
        }     
    }
})();