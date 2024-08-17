import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken = 'BQCx7gul2Wqat_6eCW2FUDdYY-KpyqA9BiuelL4jWdzKOOILq6oIkuw74s5IUfqK3A9TpuBoRqJR8Svd-iw3hIdkeeI0Yy7L6MH3VUWBtaZCfsG8dPg';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
  }

searchDiscs(query: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/search?q=${query}&type=album&limit=5`, { headers });
  }

  getDiscDetails(discId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/albums/${discId}`, { headers });
  }

}
