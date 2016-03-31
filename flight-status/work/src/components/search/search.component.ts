/**
 * Created by yuriy.horobey on 30-Mar-16.
 */
import {DataProviderService}  from '../../services/data.provider';
import { Component } from '../../node_modules/angular2/core';
@Component({
    selector: 'search',
    templateUrl: '/components/search/search.view.html',
    providers: [DataProviderService]
})
export class SearchComponent {
    title = 'Search Flight Status';
    flights;

    constructor(private _dataProvider:DataProviderService) {
        this.flights = _dataProvider.getData();
    }

    getStatusCSS(flight) {
        var status = flight.status.toLowerCase();
        var ret = 'results-table__data-cell_status-' + status;
        return ret;
    }
}