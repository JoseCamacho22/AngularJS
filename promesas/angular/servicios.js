var app = angular.module('promesaApp.servicios', []);

app.factory('Personas', ['$http','$q', '$rootScope' ,function ( $http,$q,$rootScope) {
	
	var self = {
		"cargando":false,
		"mensaje":"",
		"data":[]
	};

	self.cargarData = function (){

		self.cargando = true;

		var q = $q.defer();


		$http.jsonp("http://www.json-generator.com/api/json/get/bRSaJLoBOW?callback=JSON_CALLBACK")
			.then(function success( respuesta ){

				setTimeout( function(){

					q.resolve( respuesta.data );

				},1000);
				

			},
			function error( response){

				console.log(":(");
				q.reject("Error al cargar");


			});

			return q.promise;

	};


	$rootScope.promise = self.cargarData();
	$rootScope.promise.then( function ( data){

		self.cargando = false;
		self.mensaje="Cargado correctamente";
		self.data = data;

	},function(error){
			self.cargando = false;
			self.mensaje="Error al cargar data";
			console.error ( error );

	});

	return self;
}])