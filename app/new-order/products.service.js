(function() {
    'use strict';

    angular
    .module('teste-acruxx')
    .factory('ProductService', function($http, URL_API){

		return {
			carregarDados: function (dados){
				var url = URL_API + "api/products";
				return $http({
				    method: 'GET',
				    url: url
				});

			}
		};
	});

})();