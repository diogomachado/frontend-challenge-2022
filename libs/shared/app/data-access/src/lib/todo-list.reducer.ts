import { Task } from '@frontend-challenge/shared/util/api-interfaces';
import { createReducer, on } from '@ngrx/store';
import * as TodoListActions from './todo-list.actions';

export const todoListFeatureKey = 'todoList';

export interface State {
  taskList: Task[];
}

export const initialState: State = {
  taskList: [],
};

export const reducer = createReducer(
  initialState,
  on(TodoListActions.loadTodoList, (state) => state),
  on(TodoListActions.loadTodoListSuccess, (state, { tasks }) => ({
    ...state,
    taskList: tasks,
  })),
  on(TodoListActions.createTodoListSuccess, (state, { task }) => ({
    ...state,
    taskList: state.taskList.concat(task),
  })),
  on(TodoListActions.removeTodoListSuccess, (state, { taskId }) => ({
    ...state,
    taskList: state.taskList.filter(({ id }) => id !== taskId),
  })),
  on(TodoListActions.updateTodoListSuccess, (state, { task }) => ({
    ...state,
    taskList: state.taskList.map((t) => (t.id === task.id ? task : t)),
  }))
);
