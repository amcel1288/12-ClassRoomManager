(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['teacherFactory', '$stateParams', '$state'];

    /* @ngInject */
    function TeacherDetailController(teacherFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'TeacherDetailController';
        vm.teacherId = $stateParams.id;
        vm.currentTeacher = [];
        vm.editTeacher = editTeacher;
        vm.addTeacher = addTeacher;


        activate();

        ////////////////

        function activate() {
            if (vm.teacherId != null) {
                teacherFactory
                    .getTeacher(vm.teacherId)
                    .then(function(response) {
                        vm.currentTeacher = response.data;
                    })
            }
        }
        function editTeacher(id, teacher) {
            teacherFactory
                .updateTeacher(id, teacher)
                .then(function(response) {
                    console.log('teacher updated');
                    $state.go('teacher.grid');
                })
        }

        function addTeacher(teacher) {
            teacherFactory
                .createTeacher(teacher)
                .then(function(response) {
                    vm.newTeacher = {};
                    $state.go('teacher.grid');
                });
        }




    }
})();