import {Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Actor} from '../model/actor.model';

@Inject
export class ActorService {
  constructor(private http: HttpClient) {}

  /**
   * 获取全部演员
   */
  public getAllActor = (): Observable<Array<Actor>> => {
    return this. http.get<Array<Actor>>('api/actors');
  }
}
