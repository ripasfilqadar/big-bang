import { Http, Response } from '@angular/Http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { IbaseCrudService } from './ibase-crud.service'
import { ADDRGETNETWORKPARAMS } from 'dns'

export class BaseCrudService implements IbaseCrudService {
	public urlApi = ''
	http: Http
	constructor() {
	}

	getAll(params: { [key: string]: any } = {}): Observable < any[] > {
    return this.http.get(this.urlApi, {params: params})
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error))
	}

	getById(id: string, params: {[key: string]: any} = {}): Observable < any > {
	 return this.http.get(this.urlApi + `/${id}`, {params: params})
	 .map((response: Response) => response.json())
	 .catch((error: any) => Observable.throw(error))
	}

	update(item: any, id: string, params: {[key: string]: any} = {}): Observable < any > {
	 return this.http.put(this.urlApi + `/${id}`, item, {params: params} )
	 .map((response: Response) => response.json())
	 .catch((error: any) => Observable.throw(error))
	}

	delete(id: string, params: {[key: string]: any} = {}): Observable < any > {
	 return this.http.delete(this.urlApi + `/${id}`, {params: params})
	 .map((response: Response) => response.json())
	 .catch((error: any) => Observable.throw(error))
	}

	create(item: any, params: {[key: string]: any} = {}): Observable < any > {
	 return this.http.post(this.urlApi, item, {params: params})
	 .map((response: Response) => response.json())
	 .catch((error: any) => Observable.throw(error || 'server error'))
	}
}
