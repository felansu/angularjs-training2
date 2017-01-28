(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index6Controller', IndexController);

    IndexController.$inject = ['$scope', '$rootScope'];

    function IndexController($scope, $rootScope) {
        $scope.dispararEvento = dispararEvento;

        // Escuta evento onTesteEvent que cheguem em rootScope
        $rootScope.$on('onTesteEvent', onTesteEvent);

        // Escuta evento onTesteEvent que cheguem em $scope
        // $scope.$on('onTesteEvent', onTesteEvent);

        function onTesteEvent(event, data) {
            // Para de ouvir este evento
            // $scope.preventDefault();
            console.log(data);
        }

        function dispararEvento() {
            // Emit dispara um evento para os escopos superiores
            // Broadcast dispara um evento para os escopos inferiores
            $scope.$emit('onTesteEvent', 'teste');
        }

    }

})();