import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadejokeServiceService {
  constructor(private httpClient: HttpClient) {}
  generateJoke(): Observable<any> {
    const config = {
      Headers: {
        Accept: 'application/json',
      },
    };
    return this.httpClient.get('https://icanhazdadjoke.com', {
      headers: config.Headers,
    });
  }
}
