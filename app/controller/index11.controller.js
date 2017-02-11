(function () {
	'use strict';

	angular
		.module('pdCurso')
		.controller('Index11Controller', IndexController);

	/*@ngInject*/
	function IndexController(PdAlertService) {

		var vm = this;

		vm.pessoa = {};
		vm.sexo = [{valor: 'M', descricao: 'Masculino'}, {valor: 'F', descricao: 'Feminino'}];

		vm.salvar = salvar;

		function salvar() {
			PdAlertService.showSuccess('Ok', 'Registro salvo');
		}

	}

})();