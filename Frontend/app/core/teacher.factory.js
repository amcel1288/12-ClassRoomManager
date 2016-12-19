(function() {
    'use strict';

    angular
        .module('app')
        .factory('teacherFactory', teacherFactory);

    teacherFactory.$inject = ['$http'];

    /* @ngInject */
    function teacherFactory($http) {
        var service = {
            getAllTeachers: getAllTeachers,
            getTeacher: getTeacher,
            updateTeacher: updateTeacher,
            createTeacher: createTeacher,
            removeTeacher: removeTeacher
        };
        return service;

        ////////////////

        function getAllTeachers() {
        	return $http
        		.get('http://localhost:64924/api/Teachers');
        }
        function getTeacher(id) {
        	return $http
        		.get('http://localhost:64924/api/Teachers/' + id);
        }
        function updateTeacher(id, obj) {
        	return $http
        		.put('http://localhost:64924/api/Teachers/' + id, obj);
        }
        function createTeacher(obj) {
        	return $http
        		.post('http://localhost:64924/api/Teachers', obj);
        }
        function removeTeacher(id) {
        	return $http
        		.delete('http://localhost:64924/api/Teachers/' + id);
        }
    }
})();