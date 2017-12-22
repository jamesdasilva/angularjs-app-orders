(function() {
    'use strict';

    angular
    .module('teste-acruxx')
    .factory('newOrdersService', function($http, URL_API){

		return {
			enviarDados: function (dados){
				var url = URL_API + "api/orders";
				return $http({
				    method: 'POST',
				    url: url,
				    data: dados
				});

			}
		};
	});

})();