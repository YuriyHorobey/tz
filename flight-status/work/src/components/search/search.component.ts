/**
 * Created by yuriy.horobey on 30-Mar-16.
 */
import {DataProviderService}  from '../../services/data.provider';
import { Component } from '../../node_modules/angular2/core';
import {FORM_DIRECTIVES,ControlGroup,Control} from '../../node_modules/angular2/common';
@Component({
    selector: 'search',
    templateUrl: '/components/search/search.view.html',
    providers: [DataProviderService],
    directives: [FORM_DIRECTIVES]
})
export class SearchComponent {

    private _sort:Object;
    title = 'Search Flight Status';

    searchForm:ControlGroup;

    flights:Object[];

    constructor(private _dataProvider:DataProviderService) {
        this.flights = _dataProvider.getData();
        this._sort = {field: 'date', direction: 'up'}
        this.searchForm = new ControlGroup({
            code: new Control("", function validateCodeFiled() {
                console.log(arguments)
            }),
            number: new Control("", function validateNumberFiled() {
                console.log(arguments)
            })
        });
    }

    getStatusCSS(flight) {
        var status = flight.status.toLowerCase();
        var ret = 'results-table__data-cell_status-' + status;
        return ret;
    }

    isButtonActiveCSS(button, direction) {
        var ret =
            ('' + button ).trim() == this._sort.field
            &&
            ('' + direction ).toLowerCase().trim() == this._sort.direction
                ? 'active' : '';
        return ret;
    }

    onSortBy(filed:string, direction:string) {
        this._sort.field = ('' + filed ).trim();
        this._sort.direction = ('' + direction ).trim();
        this._reorderFlights();
    }

    onSubmit(form) {
        console.log('submit', form);
        this.flights = this._dataProvider.getDataFiltered(form.code, form.number);
        return false;
    }

    private _reorderFlights() {
        var _sort:Object = this._sort;
        this.flights = this.flights.sort(function (e1, e2) {
            var ret = 0;
            if (e1[_sort.field] < e2[_sort.field]) {
                ret = -1;
            } else if (e1[_sort.field] > e2[_sort.field]) {
                ret = 1;
            }
            if (_sort.direction == 'down') {
                ret = -ret;
            }
            return ret;
        });
    }
}