import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as XLSX from 'xlsx';
import {WorkSheet} from "../../node_modules/xlsx/types/index";
import {Item} from "./Model";

@Injectable()
export class LootService {

    source = "";

    constructor(private http: HttpClient) {

    }

    downloadSheet(source?) {
        let url = source ? source : this.source;
        return new Promise(
            (resolve, reject) => {
                this.http.get(url).subscribe(
                    excel => resolve(excel),
                    error => reject(error)
                )
            }
        )
    }

    getItems(): Promise<Item[]> {
        return new Promise(
            (resolve, reject) => {
                this.downloadSheet()
                    .then(sheet => {
                        let sheets: {[p: string]: WorkSheet} = XLSX.read(sheet).Sheets;

                    })

            }
        )
    }

}
