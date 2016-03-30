System.register(['../../node_modules/angular2/core', 'angular2/router', '../search/search.component', '../author/author.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, search_component_1, author_component_1;
    var FlightStatusAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            }],
        execute: function() {
            FlightStatusAppComponent = (function () {
                function FlightStatusAppComponent() {
                    this.title = 'Flight Status Test App';
                }
                FlightStatusAppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: '/components/app/app.view.html',
                        directives: [router_1.ROUTER_DIRECTIVES, author_component_1.AuthorComponent, search_component_1.SearchComponent],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Main',
                            component: search_component_1.SearchComponent
                        },
                        {
                            path: '/author',
                            name: 'Author',
                            component: author_component_1.AuthorComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], FlightStatusAppComponent);
                return FlightStatusAppComponent;
            }());
            exports_1("FlightStatusAppComponent", FlightStatusAppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map