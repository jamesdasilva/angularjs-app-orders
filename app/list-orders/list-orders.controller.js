(function() {
    'use strict';

	angular
	.module('teste-acruxx')
	.controller('listOrdersController', function($scope, $stateParams, listOrdersService) {

        console.log('$stateParams', $stateParams.time);

        $scope.listarOrders = function(){

            switch($stateParams.time){
                case 'week':
                    listOrdersService.carregarDadosSemana().then(function (response) {
                        $scope.dados = response.data;
                        console.log(response.data);
                    },function (error){
                        console.log(error, 'can not get data.');
                    });
                    break;
                case 'today':
                    listOrdersService.carregarDadosHoje().then(function (response) {
                        $scope.dados = response.data;
                        console.log(response.data);
                    },function (error){
                        console.log(error, 'can not get data.');
                    });
                    break;
                case 'all':
                    listOrdersService.carregarDados().then(function (response) {
                        $scope.dados = response.data;
                        console.log(response.data);
                    },function (error){
                        console.log(error, 'can not get data.');
                    });
                    break;
            }

        };


        $scope.listarOrders();
		

        $scope.excluirOrder = function(id){

            console.log("excluirOrder", id);

            listOrdersService.excluirRegistro(id).then(function (response) {

                console.log(response.data);

                $scope.listarOrders();

            },function (error){
                console.log(error, 'can not get data.');
            });
        };
		

	});

})();