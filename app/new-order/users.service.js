(function() {
    'use strict';

    angular
    .module('teste-acruxx')
    .factory('UserService', function($http, URL_API){

		return {
			carregarDados: function (dados){
				var url = URL_API + "api/users";
				return $http({
				    method: 'GET',
				    url: url
				});

			}
		};
	});

})();