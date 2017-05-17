var app = angular.module('facturacionApp.configuracion',[]);


app.factory('Configuracion', ['$http', '$q', function($http, $q){
	
	var self = {

		config:{},
		cargar: function(){

			var d = $q.defer();

			// $http({
			// 	method: 'GET',
			// 	url: 'configuracion.json'
			// }).then(function(data){
			// 	self.data = data;
			// 	d.resolve();
			// }),function(error){

			// 	d.reject();
			// 	console.error("No se pudo cargar el archivo de configuración");
			// };

			 $http.get('configuracion.json')
			 	.then(function(data){
			 		self.config = data;
			 		d.resolve();
			 	})
			 	.catch(function(){

			 		d.reject();
					console.error("No se pudo cargar el archivo de configuración");

			 	});

			return d.promise;
		}



	};


	return self;

}])