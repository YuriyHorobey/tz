System.register(['./node_modules/angular2/platform/browser', './node_modules/angular2/router', './components/app/app.component', './components/search/search.component', './components/author/author.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, search_component_1, author_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.FlightStatusAppComponent, [
                router_1.ROUTER_PROVIDERS,
                search_component_1.SearchComponent,
                author_component_1.AuthorComponent
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map