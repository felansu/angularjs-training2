(function () {
	'use strict';

	angular
		.module('pdCurso')
		.controller('Index11Controller', IndexController);

	/*@ngInject*/
	function IndexController(PdAlertService, PdStorageService) {

		var vm = this;

		vm.pessoa = {};
		vm.sexo = [{valor: 'M', descricao: 'Masculino'}, {valor: 'F', descricao: 'Feminino'}];

		vm.salvar = salvar;
		vm.remover = remover;

		iniciar();

		function iniciar() {
			var pessoa = PdStorageService.get('pessoa');
			if (pessoa) {
				vm.pessoa = pessoa;
			}
		}

		function salvar() {
			PdAlertService.showSuccess('Ok', 'Registro salvo');
			PdStorageService.set('pessoa', vm.pessoa);
		}

		function remover() {
			PdAlertService.showSuccess('Ok', 'Registro salvo');
			PdStorageService.remover('pessoa', vm.pessoa);
		}

	}

})();