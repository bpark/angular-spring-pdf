import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class DocumentRepositoryService {

  constructor(private httpClient: HttpClient) {
  }

  public generatePdf(name: string): Observable<ArrayBuffer> {

    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/pdf',
      Authorization: 'add your token here'
    });

    const httpOptions = {
      headers,
      responseType: 'blob' as 'json'
    };

    return this.httpClient.post<Blob>('/api/pdfs/', {name}, httpOptions).pipe(
      tap(res => console.log(res)),
      mergeMap((res: Blob) => fromPromise(res.arrayBuffer())),
    );
  }
}
