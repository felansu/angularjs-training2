(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('PesquisaProdutoController', PesquisaProdutoController);

    /*@ngInject*/
    function PesquisaProdutoController($rootScope, $state, PdAlertService) {

        var vm = this;

        vm.title = 'Pesquisa de produtos';

        vm.listaProdutos = [];

        vm.alterarRota = alterarRota;
        vm.excluir = excluir;

        init();

        vm.gridOptions = {
            data: '$rootScope.listaProdutos',
            enableColumnMenus: false,
            enableRowSelection: true,
            rowTemplate: 'templates/row-template.html',
            columnDefs: [
                {name: 'Descrição', field: 'descricao'},
                {name: 'Valor', field: 'valor', width: 250},
                {
                    name: 'Ações',
                    width: 100,
                    cellTemplate: 'templates/cell-template-actions.html',
                    onClick: excluir
                }
            ]
        };

        function init() {
            vm.listaProdutos = $rootScope.listaProdutos;
        }

        function alterarRota(rota, index) {
            $state.go(rota, {id: index});
        }

        function excluir(index) {
            $rootScope.listaProdutos.splice(index, 1);
            PdAlertService.showSuccess('O registro foi excluido.', 'Sucesso !');
        }


    }

})();

