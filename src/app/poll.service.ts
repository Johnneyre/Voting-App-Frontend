import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from './poll.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  private baseURL = 'http://localhost:8080/api/polls';

  constructor(private http: HttpClient) {}

  createPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.baseURL, poll);
  }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.baseURL);
  }

  vote(pollId: number, optionIndex: number): Observable<void> {
    const url = `${this.baseURL}/vote`;
    return this.http.post<void>(url, { pollId, optionIndex });
  }

  getPollByID(pollID: number): Observable<Poll> {
    return this.http.post<Poll>(this.baseURL, pollID);
  }
}
