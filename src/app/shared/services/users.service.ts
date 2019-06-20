import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from '../../_interfaces/user.interface';
import {environment} from '../../../environments/environment';
import {ApiEndpoints} from '../../_enums/api-endpoints.enum';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${environment.apiUrl}${ApiEndpoints.USER_FIND_ALL}`);
  }

  public delete(): Observable<UserInterface> {
    return this.http.delete<UserInterface>(`${environment.apiUrl}${ApiEndpoints.USER_DELETE}`);
  }

  public update(user: UserInterface): Observable<UserInterface> {
    return this.http.patch<UserInterface>(`${environment.apiUrl}${ApiEndpoints.USER_UPDATE}`, user);
  }

  public create(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${environment.apiUrl}${ApiEndpoints.USER_CREATE}`, user);
  }

  public findOne(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${environment.apiUrl}${ApiEndpoints.USER_FIND_ONE}${id}`);
  }
}
