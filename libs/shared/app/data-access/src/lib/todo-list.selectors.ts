import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
import { TaskStatus } from '@frontend-challenge/shared/util/api-interfaces';

export const selectTodoListState = createFeatureSelector<fromTodoList.State>(
  fromTodoList.todoListFeatureKey
);

export const taskList = createSelector(
  selectTodoListState,
  ({ taskList }) => taskList
);

export const todoTaskList = createSelector(
  selectTodoListState,
  ({ taskList }) => taskList.filter(({ status }) => status === TaskStatus.ToDo)
);

export const doingTaskList = createSelector(
  selectTodoListState,
  ({ taskList }) => taskList.filter(({ status }) => status === TaskStatus.Doing)
);

export const doneTaskList = createSelector(
  selectTodoListState,
  ({ taskList }) => taskList.filter(({ status }) => status === TaskStatus.Done)
);
