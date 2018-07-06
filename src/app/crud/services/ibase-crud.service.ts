import { Http, Response } from '@angular/Http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

export interface IbaseCrudService {
  urlApi: string
  http: Http
  getAll(params:  {}): Observable < any >
  getById(id: string): Observable < any >
  update(item: any, id: string): Observable < any >
  delete(id: string): Observable < any >
  create(item: any): Observable<any>
}
