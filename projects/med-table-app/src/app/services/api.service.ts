import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { MESSAGES } from '../messages';
import { ServerResponse } from '../types';
import { urlAddQueryParam } from '../uitls';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../notificationTypes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private notification: NotificationService) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getData<T>(url: string, params?: Record<string, string>, defaultValue: any = []): Observable<T> {
    return this.http.get<ServerResponse<T>>(urlAddQueryParam(url, location.search),{ params }).pipe(
      map(data => this.responseHandler<T>(data, defaultValue)),
      catchError(this.handleError<T>(MESSAGES.error.serverError, 'getData', defaultValue)),
    );
  }

  updateItem<T>(url: string, item: T, defaultValue?: any): Observable<T> {
    return this.http.post<ServerResponse<T>>(urlAddQueryParam(url, location.search), item, this.httpOptions).pipe(
      map(({ data}) => data),
      tap(() => this.notification.add(MESSAGES.success.updated, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<T>(MESSAGES.error.serverError, 'updateItem', defaultValue)),
    );
  }

  addItem<T, R>(url: string, item: T, defaultValue?: any): Observable<R> {
    return this.http.post<ServerResponse<R>>(urlAddQueryParam(url, location.search), item, this.httpOptions).pipe(
      map(({ data }) => data),
      tap(() => this.notification.add(MESSAGES.success.added, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<R>(MESSAGES.error.serverError, 'addItem', defaultValue)),
    );
  }

  private responseHandler<T>({data, error}: ServerResponse<T>, defaultValue: any): T {
    if (error) {
      this.log(`Failed: ${error}`, 'error');
      this.notification.add(error, NOTIFICATION_TYPES.ERROR);
    }

    return data || defaultValue;
  }

  private handleError<T>(message: string, operation = 'operation', result?: any) {
    return (error: any): Observable<T> => {
      this.notification.add(message, NOTIFICATION_TYPES.ERROR);
      this.log(`${operation} failed: ${error.message}`, 'error');

      return of(result as T);
    };
  }

  private log(message: string, type = 'log'): void {
    (console as Record<string, any>)[type](`ApiService: ${message}`);
  }
}
