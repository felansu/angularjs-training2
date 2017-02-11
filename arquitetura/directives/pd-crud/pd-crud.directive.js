(function () {
	'use strict';

	angular
		.module('pdCurso')
		.directive('pdCrud', pdCrud);

	/* @ngInject */
	function pdCrud($log) {
		var pdCrud = {
			templateUrl: 'arquitetura/directives/pd-crud/pd-crud.template.html',
			restrict: 'E',
			scope: {
				titulo: '@',
				tipo: '@',
				icone: '@',
				salvar: '&',
				excluir: '&',
				limpar: '&'
			},
			transclude: {
				'header': '?pdCrudHeader',
				'body': 'pdCrudBody',
				'footer': 'pdCrudFooter'
			},
			link: link
		};

		return pdCrud;

		function link(scope, element, attrs) {
			iniciar();

			function iniciar() {
				verificarParametrosNaoInformados();
				definirValoresDefault();
			}

			function verificarParametrosNaoInformados() {
				if (!scope.titulo) {
					$log.error('Atenção: Não foi informado o título.');
				}
			}

			function definirValoresDefault() {
				scope.formName = 'pdForm' + scope.id;
				scope.classTipo = 'panel-' + (scope.tipo || 'default');
				scope.textTitulo = scope.titulo || 'Sem titulo';
				scope.classIcone = 'fa fa-' + (scope.icone || 'battery');
			}
		}
	}
})();