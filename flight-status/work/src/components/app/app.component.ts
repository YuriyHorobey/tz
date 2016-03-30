import { Component } from '../../node_modules/angular2/core';


import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {SearchComponent} from '../search/search.component';
import {AuthorComponent} from '../author/author.component';

@Component({
    selector: 'app',
    templateUrl: '/components/app/app.view.html',
    directives: [ROUTER_DIRECTIVES, AuthorComponent, SearchComponent],
    providers: [ROUTER_PROVIDERS]
})


@RouteConfig([
    {
        path: '/',
        name: 'Main',
        component: SearchComponent
    },
    {
        path: '/author',
        name: 'Author',
        component: AuthorComponent
    }
])

export class FlightStatusAppComponent {
    title = 'Flight Status Test App';
}