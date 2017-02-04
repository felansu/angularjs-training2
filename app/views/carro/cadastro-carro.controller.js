(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('CadastroCarroController', CadastroCarroController);

    function CadastroCarroController($scope) {
        $scope.title = "Cadastro de carro";
    }

})();

