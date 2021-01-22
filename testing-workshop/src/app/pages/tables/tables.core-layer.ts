import { Injectable } from '@angular/core';
import { TableHeaderItem, TableItem } from 'carbon-components-angular';

@Injectable({
    providedIn: 'root'
})
export class TablesCoreLayer {

    generateTableHeaders() {
        const tableHeaders = [
            new TableHeaderItem({data: 'CNUM', sortable: false }),
            new TableHeaderItem({data: 'Name', sortable: false }),
            new TableHeaderItem({data: 'Home Country', sortable: false }),
            new TableHeaderItem({data: 'BU', sortable: false }),
            new TableHeaderItem({data: 'Band', sortable: false }),
        ];
        return tableHeaders;
    }

    generateRow(person) {
        return [
            new TableItem({ data: person.cnum }),
            new TableItem({ data: person.name }),
            new TableItem({ data: person.country }),
            new TableItem({ data: person.bu }),
            new TableItem({ data: person.band }),
        ];
    }
}
