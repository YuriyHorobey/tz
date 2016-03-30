(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.FlightStatusApp);
    });
})(window.app || (window.app = {}));