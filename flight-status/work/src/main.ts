import {bootstrap} from './node_modules/angular2/platform/browser';
import {ROUTER_PROVIDERS} from './node_modules/angular2/router';

import {FlightStatusAppComponent} from  './components/app/app.component';
import {SearchComponent} from  './components/search/search.component';
import {AuthorComponent} from  './components/author/author.component';

bootstrap(FlightStatusAppComponent, [
    ROUTER_PROVIDERS,
    SearchComponent,
    AuthorComponent
]);