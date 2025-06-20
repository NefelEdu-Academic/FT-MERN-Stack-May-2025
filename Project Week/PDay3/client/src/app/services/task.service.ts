import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private handleError(err: any):Observable<any>{
    return throwError(()=> err.error.errors )

  }

  createTask(data: Task): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/tasks`, data)
      .pipe(catchError(this.handleError));
  }

  getAllTasks(): Observable<any>{
    return this.http.get(`${this.baseUrl}/tasks`)
  }

  deleteTask(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/tasks/${id}`)
  }
}
