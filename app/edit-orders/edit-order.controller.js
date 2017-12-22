(function() {
    'use strict';

	angular
	.module('teste-acruxx')
	.controller('editOrderController', function($scope, listOrdersService, $stateParams, UserService, ProductService) {

        console.log('$stateParams.id', $stateParams.id);

        $scope.dados = {};
        $scope.dados.success = false;

        $scope.getOrder = function(id){

            listOrdersService.getRegistro(id).then(function (response) {

                response.data.success = $scope.dados.success
                $scope.dados = response.data;

                console.log(response.data);


            },function (error){
                console.log(error, 'can not get data.');
            });

        };

        $scope.getOrder($stateParams.id);

        $scope.atualizarOrder = function(dados){

            listOrdersService.atualizarRegistro($stateParams.id, dados).then(function (response) {

                console.log(response.data);

                $scope.getOrder($stateParams.id);
                $scope.dados.success = true;


            },function (error){
                console.log(error, 'can not get data.');
            });

        };

        $scope.carregarUsuarios = function(){

            UserService.carregarDados().then(function (response) {

                $scope.usuarios = response.data;
                console.log(response.data);


            },function (error){
                console.log(error, 'can not get data.');
            });

        };

        $scope.carregarUsuarios();

        $scope.carregarProdutos = function(){

            ProductService.carregarDados().then(function (response) {

                $scope.produtos = response.data;
                console.log(response.data);


            },function (error){
                console.log(error, 'can not get data.');
            });

        };

        $scope.carregarProdutos();


	});

})();