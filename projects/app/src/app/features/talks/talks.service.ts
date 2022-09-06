import {Injectable} from '@angular/core';
import {Talk} from "./model/talk.model";
import {TALK_MOCK_DATA} from "./talk.data";
import {debounceTime, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  constructor() {
  }

  getUpcomingTalks(): Observable<Talk[]> {
    return of(TALK_MOCK_DATA).pipe(debounceTime(200));
  }
}
