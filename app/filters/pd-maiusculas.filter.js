(function () {
    'use strict';

    angular
        .module('pdCurso')
        .filter('maiusculas', maiusculas);

    function maiusculas() {
        return maiusculasFilter;

        function maiusculasFilter(input) {
            return !input ? '' : input.toUpperCase();
        }
    }

})();

