import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as Constants from './constants';
import * as Models from './models';


@Injectable({
  providedIn: 'root'
})
export class HttpConstructorService {

  constructor(public router: Router, private http: HttpClient) { }

  private saveNewRecord(record: object): Models.ProjectModel {
    return this.http
    .post(Constants.SERVER_URL + '/saveNewRecord', record)
    .subscribe((r) => { console.log(r); }) as unknown as Models.ProjectModel;
  }

  private getAllRecords(): object {
    return this.http.get(Constants.SERVER_URL + '/getAllRecords');
  }

  private getAllServices(): object {
    return this.http.get(Constants.SERVER_URL + '/getAllRecords');
  }
}
