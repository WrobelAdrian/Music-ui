import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ApiEndpoints} from '../../_enums/api-endpoints.enum';
import {CategoryEnum} from '../../_enums/category.enum';
import {AnythingEnum} from '../../_enums/anything.enum';

@Injectable()
export class MusicService {
  constructor(private http: HttpClient) {}

  public findItem(category: CategoryEnum, id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${ApiEndpoints.MUSIC_GET}${category}/${id}`);
  }

  public search(category: CategoryEnum, keyword: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${ApiEndpoints.MUSIC_SEARCH}${category}/${keyword}`);
  }

  public getAnything(anything: AnythingEnum): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${ApiEndpoints.MUSIC_GET}${anything}`);
  }
}
