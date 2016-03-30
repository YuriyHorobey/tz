(function (app) {
    app.FlightStatusApp =
        ng.core.Component({
            selector:'app',
            template:'<h1>Test!</h1>'
        })
            .Class({
                constructor:function FlightStatusAppConstructor(){

                }
            });
})(window.app || (window.app = {}));