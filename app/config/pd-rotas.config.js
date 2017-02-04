(function () {
    'use strict';

    angular
        .module('pdCurso')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {

        const cadastroCarro = {
            name: 'cadastroCarro',
            url: '/cadastro-carro',
            templateUrl: 'app/views/carro/cadastro-carro.html',
            controller: 'CadastroCarroController',
            resolve: {
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/carro/cadastro-carro.controller.js');
                }
            }
        };

        const pesquisaCarro = {
            name: 'pesquisaCarro',
            url: '/pesquisa-carro',
            templateUrl: 'app/views/carro/pesquisa-carro.html',
            controller: 'PesquisaCarroController',
            resolve: {
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/carro/pesquisa-carro.controller.js');
                }
            }
        };

        const cadastroProduto = {
            name: 'cadastroProduto',
            url: '/cadastro-produto/:id',
            templateUrl: 'app/views/produto/cadastro-produto.html',
            controller: 'CadastroProdutoController',
            controllerAs: 'vm',
            resolve: {
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/produto/cadastro-produto.controller.js');
                }
            }
        };

        const pesquisaProduto = {
            name: 'pesquisaProduto',
            url: '/pesquisar-produto',
            templateUrl: 'app/views/produto/pesquisa-produto.html',
            controller: 'PesquisaProdutoController',
            controllerAs: 'vm',
            resolve: {
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/produto/pesquisa-produto.controller.js');
                }
            }
        };

        $stateProvider
            .state('cadastroCarro', cadastroCarro)
            .state('pesquisaCarro', pesquisaCarro)
            .state('cadastroProduto', cadastroProduto)
            .state('pesquisaProduto', pesquisaProduto);
    }

})();