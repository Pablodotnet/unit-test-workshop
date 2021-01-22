import { Injectable } from '@angular/core';
import { from, of, throwError } from 'rxjs';
import { catchError, delay, filter } from 'rxjs/operators';
import { ManagersMock } from '../mocks/ManagersMock';
import { TeamsMock } from '../mocks/TeamsMock';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getAllManagers() {
    return of(ManagersMock).pipe(
      delay(2000),
      catchError(error => {
        console.error(error);
        return throwError(error);
      }),
      catchError(error => of([])),
    );
  }

  getAllTeamMembers() {
    return of(TeamsMock).pipe(
      delay(2000),
      catchError(error => {
        console.error(error);
        return throwError(error);
      }),
      catchError(error => of([])),
    );
  }
}
