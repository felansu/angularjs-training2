(function () {
	'use strict';

	angular
		.module('pdCurso')
		.directive('pdPanel', pdPanel);

	/* @ngInject */
	function pdPanel() {
		var pdPanel = {
			templateUrl: 'arquitetura/directives/pd-painel/pd-painel.template.html',
			restrict: 'E',
			scope: {
				titulo: '@',
				tipo: '@',
				icone: '@'
			},
			transclude: true,
			link: link
		};

		return pdPanel;

		function link(scope, element, attrs) {
			scope.classTipo = 'panel-' + (scope.tipo || 'default');
			scope.textTitulo = scope.titulo || 'Sem titulo';
			scope.classIcone = 'fa fa-' + (scope.icone || 'battery');
		}
	}
})();