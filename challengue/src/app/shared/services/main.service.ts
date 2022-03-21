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
    if (params != null) {
      let ptrs = "";
      Object.entries(params)
        .forEach(([k, v]) => {
          ptrs += `${k}=${params[k]}`;
        });
      url += `?${ptrs}`;
      console.log(url);

    }
    return this.httpClient.request<ResultApi>(method, this._baseURL + url);
  }
}
