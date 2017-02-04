(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('PesquisaCarroController', PesquisaCarroController);

    function PesquisaCarroController($scope) {
        $scope.title = "Pesquisa de carro";
    }

})();

