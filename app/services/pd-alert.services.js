(function () {
    'use strict';

    angular
        .module('pdCurso')
        .service('PdAlertService', ServiceName);

    /* @ngInject */
    function ServiceName(toastr) {

        this.showSuccess = showSuccess;
        this.showError = showError;
        this.showInfo = showInfo;

        function showSuccess(mensagem, titulo) {
            titulo = titulo || 'Ok';
            toastr.success(mensagem, titulo);
        }

        function showError(mensagem, titulo) {
            titulo = titulo || 'Ok';
            toastr.error(mensagem, titulo);
        }

        function showInfo(mensagem, titulo) {
            titulo = titulo || 'Ok';
            toastr.info(mensagem, titulo);
        }
    }

})();