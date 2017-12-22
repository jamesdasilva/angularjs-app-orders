(function() {
    'use strict';

    angular
    .module('teste-acruxx')
    .factory('listOrdersService', function($http, URL_API){

		return {
			atualizarRegistro: function(id, dados){
				var url = URL_API + "api/orders/" + id;
				return $http({
				    method: 'PUT',
				    url: url,
				    data: dados
				});
			},
			excluirRegistro: function(id){
				console.log();
				var url = URL_API + "api/orders/" + id;
				return $http({
				    method: 'DELETE',
				    url: url
				});
			},
			carregarDados: function (){
				var url = URL_API + "api/orders";
				return $http({
				    method: 'GET',
				    url: url
				});
			},
			carregarDadosHoje: function (){
				var url = URL_API + "api/today";
				return $http({
				    method: 'GET',
				    url:url
				});
			},
			carregarDadosSemana: function (){
				var url = URL_API + "api/week";
				return $http({
				    method: 'GET',
				    url: url
				});
			},
			getRegistro: function (id){
				var url = URL_API + "api/orders/" + id;
				return $http({
				    method: 'GET',
				    url: url
				});
			}
		};
	});

})();