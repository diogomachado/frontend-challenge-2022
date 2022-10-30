import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as TodoListActions from './todo-list.actions';
import { TodoListService } from './todo-list.service';
import { of } from 'rxjs';

@Injectable()
export class TodoListEffects {
  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.loadTodoList),
      exhaustMap(() =>
        this.service.list().pipe(
          map((tasks) => TodoListActions.loadTodoListSuccess({ tasks })),
          catchError((error) => of(TodoListActions.loadTodoListError(error)))
        )
      )
    );
  });

  createTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.createTodoList),
      exhaustMap(({ task }) =>
        this.service.create(task).pipe(
          map((task) => TodoListActions.createTodoListSuccess({ task })),
          catchError((error) => of(TodoListActions.createTodoListError(error)))
        )
      )
    );
  });

  removerTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.removeTodoList),
      exhaustMap(({ taskId }) =>
        this.service.remove(taskId).pipe(
          map(() => TodoListActions.removeTodoListSuccess({ taskId })),
          catchError((error) => of(TodoListActions.removeTodoListError(error)))
        )
      )
    );
  });

  updateTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.updateTodoList),
      exhaustMap(({ task }) =>
        this.service.update(task).pipe(
          map(() => TodoListActions.updateTodoListSuccess({ task })),
          catchError((error) => of(TodoListActions.updateTodoListError(error)))
        )
      )
    );
  });

  constructor(private actions$: Actions, private service: TodoListService) {}
}
