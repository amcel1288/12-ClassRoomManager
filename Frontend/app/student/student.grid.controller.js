(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = ['studentFactory'];

    /* @ngInject */
    function StudentGridController(studentFactory) {
        var vm = this;
        vm.title = 'StudentGridController';
        vm.students = [];
        vm.deleteStudent = deleteStudent;

        activate();

        ////////////////

        function activate() {
            studentFactory
                .getAllStudents()
                .then(function(response) {
                    vm.students = response.data;
                });
        }
        function deleteStudent(student) {
            studentFactory
                .removeStudent(student.studentId)
                .then(function(response) {
                    var index = vm.students.indexOf(student);
                    vm.students.splice(index, 1);
            });
        }
    }
})();