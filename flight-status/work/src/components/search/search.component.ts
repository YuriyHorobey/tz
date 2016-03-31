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
    title = 'Search Flight Status';

    searchForm:ControlGroup;

    flights:Object[];

    constructor(private _dataProvider:DataProviderService) {
        this.flights = _dataProvider.getData();
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

    onSubmit(form) {
        console.log('submit', form);
        this.flights = this._dataProvider.getDataFiltered(form.code, form.number);
        return false;
    }
}