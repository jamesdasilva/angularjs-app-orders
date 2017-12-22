(function() {
	'use strict';
	
	angular
	.module('teste-acruxx')
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/get-orders');

		$stateProvider
			.state('list-orders', {
				name: 'list-orders',
				url: '/list-orders/:time',
				component: 'listOrders'

			}).state('new-order', {
				name: 'new-order',
				url: '/new-order',
				component: 'newOrder'

			}).state('edit-order', {
				name: 'edit-order',
				url: '/edit-order/:id',
				component: 'editOrder'

			}).state('get-orders', {
				name: 'get-orders',
				url: '/get-orders',
				component: 'getOrders'
				
			});
	});

})();