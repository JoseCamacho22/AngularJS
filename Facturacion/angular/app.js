var app = angular.module('facturacionApp',[
	'ngRoute',
	'facturacionApp.configuracion',
	'facturacionApp.mensajes',
	'facturacionApp.notificaciones'
	]);

app.controller('mainCtrl',['$scope','Configuracion','Mensajes','Notificaciones', function($scope, Configuracion,Mensajes,Notificaciones){

	$scope.config = {};
	$scope.mensajes=Mensajes.mensajes;
	$scope.notificaciones=Notificaciones.notificaciones;

	console.log ($scope.notificaciones);


	$scope.usuario = {
		nombre:"Jose Augusto Camacho Fernandez"
	}






	Configuracion.cargar().then( function(){
		$scope.config = Configuracion.config;
		//console.log ( $scope.config );
	});
		
	}]);


app.config ([ '$routeProvider', function ($routeProvider){

	$routeProvider
		.when ('/',{
			templateUrl: 'dashboard/dashboard.html'

		})
		.otherwise({ 
			redirectTo: '/'
			 })


}]);

// ================================================
//   Filtros
// ================================================


app.filter( 'quitarletra', function(){

	return function(palabra){
		if( palabra ){
			if( palabra.length > 1)
				return palabra.substr(1);
			else
				return palabra;
		}
	}
})

.filter( 'mensajecorto', function(){

	return function(mensaje){
		if( mensaje ){
			if( mensaje.length >30)
				return mensaje.substr(0,30) +"...";
			else
				return mensaje;
		}
	}
})

