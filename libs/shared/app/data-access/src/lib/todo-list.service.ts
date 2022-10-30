import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '@frontend-challenge/shared/util/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Task[]> {
    return this.httpClient.get<Task[]>('api/tasks');
  }

  create(task: Partial<Task>) {
    return this.httpClient.post<Task>('api/tasks', task);
  }

  remove(taskId: string) {
    return this.httpClient.delete<Task>(`api/tasks/${taskId}`);
  }

  update(task: Task) {
    return this.httpClient.patch<Task>(`api/tasks/${task.id}`, task);
  }
}
