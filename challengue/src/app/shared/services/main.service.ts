import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultApi } from '../interfaces/meals';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private _baseURL: string = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) {

  }

  public requestPetition(url: string, method: string, params: any | null): Observable<ResultApi> {
    const parameters: HttpParams = new HttpParams();
    if (params != null) {
      Object.entries(params)
        .forEach(([k, v]) => { parameters.set(k, params[k]); })
    }
    return this.httpClient.request<ResultApi>(method, this._baseURL + url, { params: parameters });
  }
}
