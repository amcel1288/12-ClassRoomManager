(function() {
    'use strict';

    angular
        .module('app')
        .factory('studentFactory', studentFactory);

    studentFactory.$inject = ['$http'];

    /* @ngInject */
    function studentFactory($http) {
        var service = {
            getAllStudents: getAllStudents,
            getStudent: getStudent,
            updateStudent: updateStudent,
            createStudent: createStudent,
            removeStudent: removeStudent
        };
        return service;

        ////////////////

        function getAllStudents() {
        	return $http
        		.get('http://localhost:64924/api/Students');
        }
        function getStudent(id) {
        	return $http
        		.get('http://localhost:64924/api/Students/' + id);
        }
        function updateStudent(id, obj) {
        	return $http
        		.put('http://localhost:64924/api/Students/' + id, obj);
        }
        function createStudent(obj) {
        	return $http
        		.post('http://localhost:64924/api/Students', obj);
        }
        function removeStudent(id) {
        	return $http
        		.delete('http://localhost:64924/api/Students/' + id);
        }
    }
})();