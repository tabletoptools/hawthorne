import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {getToken, setToken} from "./SecurityHelper";
import {isBoolean} from "util";

@Injectable()
export class BotService {

  constructor(protected http: HttpClient) { }

  getUser() {
      return new Promise(
          (resolve, reject) => {
              this.http.get(environment.serverBase + '/user', {
                  headers: new HttpHeaders({
                      'Authorization': 'Bearer ' + getToken()
                  })
              }).subscribe(
                  (data) => resolve(data),
                  (error: HttpErrorResponse) => reject(error)
              )
          }
      )
  }

  getRoles() {
      return new Promise(
          (resolve, reject) => {
              this.http.get(environment.serverBase + '/roles', {
                  headers: new HttpHeaders({
                      'Authorization': 'Bearer ' + getToken()
                  })
              }).subscribe(
                  (data) => resolve(data),
                  (error: HttpErrorResponse) => reject(error)
              )
          }
      )
  }

  isInHawthorne() {
      return new Promise(
          (resolve, reject) => {
              this.http.get(environment.serverBase + '/in-hawthorne', {
                  headers: new HttpHeaders({
                      'Authorization': 'Bearer ' + getToken()
                  }),
                  responseType: 'text'
              }).subscribe(
                  (data: string) => resolve((data == 'true')),
                  (error: HttpErrorResponse) => reject(error)
              )
          }
      )
  }

}
