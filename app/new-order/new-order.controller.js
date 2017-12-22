(function() {
    'use strict';

	angular
	.module('teste-acruxx')
	.controller('newOrdersController', function($scope, newOrdersService, ProductService, UserService) {
		
        $scope.dados = new Object();

        $scope.dados.success = false;
        $scope.dados.erro = false;

        var date = new Date();
        var mes = date.getMonth() + 1;
        var ano = date.getFullYear();
        var dia = date.getDate()
        var dateFormat = ano + '-' + mes + '-' + dia;
        console.log(dateFormat);

        $scope.dados.date = dateFormat;

        $scope.enviarDados = function(dados){

            newOrdersService.enviarDados(dados).then(function (response) {

                $scope.dados.id = response.data.id;
                $scope.dados.product_user_id = '';
                $scope.dados.product_id = '';
                $scope.dados.quantity = '';
                if(response.data.id)
                    $scope.dados.success = true;
                console.log(response.data);


            },function (error){
                $scope.dados.erro = true;
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