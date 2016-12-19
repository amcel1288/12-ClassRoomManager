(function() {
    'use strict';

    angular
        .module('app')
        .factory('classFactory', classFactory);

    classFactory.$inject = ['$http'];

    /* @ngInject */
    function classFactory($http) {
        var service = {
            getAllClasses: getAllClasses,
            getClass: getClass,
            updateClass: updateClass,
            createClass: createClass,
            deleteClass: deleteClass,
            addStudentToClass: addStudentToClass,
            removeStudentFromClass: removeStudentFromClass
        };
        return service;

        ////////////////

        function getAllClasses() {
        	return $http
        		.get('http://localhost:64924/api/Classes');
        }
        function getClass(id) {
        	return $http
        		.get('http://localhost:64924/api/Classes/' + id);
        }
        function updateClass(id, obj) {
        	return $http
        		.put('http://localhost:64924/api/Classes/' + id, obj);
        }
        function createClass(obj) {
        	return $http
        		.post('http://localhost:64924/api/Classes', obj);
        }
        function deleteClass(id) {
        	return $http
        		.delete('http://localhost:64924/api/Classes/' + id);
        }
        function addStudentToClass(classId, studentId) {
        	return $http
        		.post('http://localhost:64924/api/classes/' + classId + '/students/' + studentId);
        }
        function removeStudentFromClass(classId, studentId) {
        	return $http
        		.delete('http://localhost:64924/api/class/' + classId + '/students/' + studentId);
        }
    }
})();