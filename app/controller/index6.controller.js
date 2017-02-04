(function () {
    'use strict';

    angular
        .module('pdCurso')
        .controller('Index6Controller', IndexController);

    /*@ngInject*/
    function IndexController($scope, $rootScope) {

        var vm = this;

        vm.dispararEvento = dispararEvento;

        // Escuta evento onTesteEvent que cheguem em rootScope
        $rootScope.$on('onTesteEvent', onTesteEvent);

        // Escuta evento onTesteEvent que cheguem em $scope
        // $scope.$on('onTesteEvent', onTesteEvent);
        function onTesteEvent(event, data) {
            // Para de ouvir este evento
            // $scope.preventDefault();
            console.log(event + '\n' + data);
        }

        function dispararEvento() {
            // Emit dispara um evento para os escopos superiores
            // Broadcast dispara um evento para os escopos inferiores
            $scope.$emit('onTesteEvent', 'teste');
        }

    }

})();