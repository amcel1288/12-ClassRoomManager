(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['studentFactory', '$stateParams', '$state'];

    /* @ngInject */
    function StudentDetailController(studentFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'StudentDetailController';
        vm.studentId = $stateParams.id;
        vm.currentStudent = [];
        vm.editStudent = editStudent;
        vm.addStudent = addStudent;


        activate();

        ////////////////

        function activate() {
            if (vm.studentId != null) {
                studentFactory
                    .getStudent(vm.studentId)
                    .then(function(response) {
                        vm.currentStudent = response.data;
                    })
            }
        }
        function editStudent(id, student) {
            studentFactory
                .updateStudent(id, student)
                .then(function(response) {
                    console.log('student updated');
                    $state.go('student.grid');
                })
        }

        function addStudent(student) {
            studentFactory
                .createStudent(student)
                .then(function(response) {
                    vm.newStudent = {};
                    $state.go('student.grid');
                });
        }




    }
})();