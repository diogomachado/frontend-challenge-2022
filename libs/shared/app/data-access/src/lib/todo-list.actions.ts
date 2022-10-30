import { Task } from '@frontend-challenge/shared/util/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const loadTodoList = createAction('[TodoList] Load TodoList');

export const loadTodoListSuccess = createAction(
  '[TodoList] Load TodoList success',
  props<{ tasks: Task[] }>()
);

export const loadTodoListError = createAction(
  '[TodoList] Load TodoList error',
  props<{ error: any }>()
);

export const createTodoList = createAction(
  '[TodoList] Create TodoList',
  props<{ task: Partial<Task> }>()
);

export const createTodoListSuccess = createAction(
  '[TodoList] Create TodoList Success',
  props<{ task: Task }>()
);

export const createTodoListError = createAction(
  '[TodoList] Create TodoList error',
  props<{ error: any }>()
);

export const removeTodoList = createAction(
  '[TodoList] Remove TodoList',
  props<{ taskId: string }>()
);

export const removeTodoListSuccess = createAction(
  '[TodoList] Remove TodoList Success',
  props<{ taskId: string }>()
);

export const removeTodoListError = createAction(
  '[TodoList] Remove TodoList error',
  props<{ error: any }>()
);

export const updateTodoList = createAction(
  '[TodoList] Update TodoList',
  props<{ task: Task }>()
);

export const updateTodoListSuccess = createAction(
  '[TodoList] Update TodoList Success',
  props<{ task: Task }>()
);

export const updateTodoListError = createAction(
  '[TodoList] Update TodoList error',
  props<{ error: any }>()
);
