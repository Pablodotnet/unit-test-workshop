import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModel } from 'carbon-components-angular';
import { Subscription } from 'rxjs';
import { PeopleService } from './services/people.service';
import { TablesCoreLayer } from './tables.core-layer';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  isLoading = false;
  managerSelected = false;

  managersTableModel = new TableModel();

  teamTableModel = new TableModel();

  constructor(
    private tablesCoreLayer: TablesCoreLayer,
    private peopleService: PeopleService,
  ) { }

  ngOnInit(): void {
    this.setManagersTableHeaders();
    this.setManagersTableData();
    this.setTeamTableHeaders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setManagersTableHeaders() {
    this.managersTableModel.header = this.tablesCoreLayer.generateTableHeaders();
  }

  setManagersTableData() {
    this.isLoading = true;
    this.subscription.add(
      this.peopleService.getAllManagers().subscribe(
        (response: any[]) => {
          const tableRows = response.map(manager => this.tablesCoreLayer.generateRow(manager));
          tableRows.forEach(row => this.managersTableModel.addRow(row));
          this.isLoading = false;
        }
      )
    );
  }

  handleManagerRowClick(rowIndex: number) {
    const row = this.managersTableModel.data[rowIndex];
    if (!!row) {
      this.managerSelected = true;
      const managerCnum = row[0].data;
      this.setTeamByManager(managerCnum);
    }
  }

  setTeamTableHeaders() {
    this.teamTableModel.header = this.tablesCoreLayer.generateTableHeaders();
  }

  setTeamByManager(managerCnum) {
    this.isLoading = true;
    this.subscription.add(
      this.peopleService.getAllTeamMembers().subscribe(
        response => {
          const managerTeamMembers = [...response].filter(teamMember => teamMember.managerCnum === managerCnum);
          const tableRows = managerTeamMembers.map(teamMember => this.tablesCoreLayer.generateRow(teamMember));
          tableRows.forEach(row => this.teamTableModel.addRow(row));
          this.isLoading = false;
        }
      )
    );
  }

  handleBackToManagersList() {
    this.managerSelected = false;
    this.teamTableModel.data = [];
  }

}
