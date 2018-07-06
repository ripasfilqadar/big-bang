import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Media } from '../models/media'
import { BaseCrudService } from '../../crud/services/base-crud.service'

@Injectable()
export class MediaService extends BaseCrudService {

  constructor(http: Http) {
    super()
    this.urlApi = 'api/Media'
    this.http = http
  }

  deleteMedia(ids: number[]): Observable<Media[]> {
    const params = {ids: ids}
    return this.http.post(`${this.urlApi}/deleteMedia`, params)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error))
  }

}
