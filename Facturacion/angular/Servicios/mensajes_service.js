var app = angular.module('facturacionApp.mensajes',[]);


app.factory('Mensajes', ['$http', '$q', function($http, $q){
	
	var self = {

		mensajes:[{
			img:'dist/img/user2-160x160.jpg',
			nombre: 'Jose Augusto',
			mensaje:'Bienvenido a nuestro servicio de facturacion',
			fecha: '22-Agosto'
		},
		{
			img:'dist/img/user2-160x160.jpg',
			nombre: 'Sonia Garcia',
			mensaje:'Holaaaa',
			fecha: '21-Agosto'
		},
		{
			img:'dist/img/user2-160x160.jpg',
			nombre: 'Yolanda Fernandez',
			mensaje:'Buenas Tardes',
			fecha: '20-Agosto'
	
		}]

	};


	return self;

}])