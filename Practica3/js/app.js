(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado =["Jose Camacho", "Sonia Garcia", "Yolanda Fernandez",]

			$scope.ListadoProfesores={
			profesores: [{
				nombre:"Fernando Herrera",
				edad:45,
				clase:"Matematicas"
			},
			{
				nombre:"Luis Herrera",
				edad:35,
				clase:"Systemas"
			},
			{
				nombre:"Juan Lopez",
				edad:50,
				clase:"Programacion"
			}]
		}




}]);





})();
