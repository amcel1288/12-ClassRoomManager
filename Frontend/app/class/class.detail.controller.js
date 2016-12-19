(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassDetailController', ClassDetailController);

    ClassDetailController.$inject = ['studentFactory', 'teacherFactory', 'classFactory', '$stateParams', '$state'];

    /* @ngInject */
    function ClassDetailController(studentFactory, teacherFactory, classFactory, $stateParams, $state) {
        var vm = this;
        vm.title = 'ClassDetailController';
        vm.classId = $stateParams.id;
        vm.classAdd = classAdd;
        vm.classEdit = classEdit;
        vm.addStudentToClass = addStudentToClass;
        vm.removeStudentFromClass = removeStudentFromClass;
        
        vm.classes = [];
        vm.teachers = [];
        vm.students = [];
        vm.currentClass = [];
        
        

        activate();

        ////////////////
        function activate() {
            if (!vm.classId) { 
                console.log('activate function fired');
                teacherFactory
                    .getAllTeachers()
                    .then(function(response) {
                        vm.teachers = response.data;
                        console.log("working");
                    });
            } else {
                classFactory
                    .getClass(vm.classId)
                    .then(function(response) {
                        vm.currentClass = response.data;
                    });
                teacherFactory
                    .getAllTeachers()
                    .then(function(response) {
                        vm.teachers = response.data;
                    });
                studentFactory
                    .getAllStudents()
                    .then(function(response) {
                        vm.students = response.data;
                    });
            }
         }
// //teacher factory get all    $state.go takes you back to grid screen???(class.grid)
        function classAdd(_class) {
            classFactory
                .createClass(_class)
                .then(function(response) {
                    vm.newClass = {};
                    $state.go('class.grid');
                });
        }
        function classEdit(id, _class) {
            classFactory
                .updateClass(id, _class)
                .then(function(response) {
                    console.log("class updated")
                    $state.go('class.grid');

                });
        }

         function addStudentToClass(classId, studentId) {
            classFactory
                .addStudentToClass(classId, studentId)
                .then(function(response) {
                    vm.newStudentId = "";
                });
        }
        function removeStudentFromClass(classId, studentId) {
            classFactory
                .removeStudentFromClass(classId, studentId)
                .then(function(response) {
                });
        }

    }
})();