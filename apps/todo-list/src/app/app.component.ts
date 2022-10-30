import { ofType } from '@ngrx/effects';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { ActionsSubject, Store } from '@ngrx/store';
import {
  TodoListActions,
  TodoListSelectors,
} from '@frontend-challenge/shared/app/data-access';
import {
  Task,
  TaskStatus,
} from '@frontend-challenge/shared/util/api-interfaces';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'frontend-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  snackProcessing: MatSnackBar | undefined;
  description: FormControl = new FormControl<string>('');
  todo$: Observable<Task[]> = this.store.select(TodoListSelectors.todoTaskList);
  doing$: Observable<Task[]> = this.store.select(
    TodoListSelectors.doingTaskList
  );
  done$: Observable<Task[]> = this.store.select(TodoListSelectors.doneTaskList);

  constructor(
    private store: Store,
    public dialog: MatDialog,
    private actionsSubj: ActionsSubject,
    private snackBar: MatSnackBar
  ) {
    // Caso ocorra algum tipo de erro, será disparado um erro
    this.actionsSubj
      .pipe(
        ofType(
          TodoListActions.createTodoListError,
          TodoListActions.loadTodoListError,
          TodoListActions.removeTodoListError,
          TodoListActions.updateTodoListError
        )
      )
      .subscribe(() => {
        this.snackBar.open('Não foi possível realizar a ação', 'Entendi');
      });

    // Coloca em carregamento
    this.actionsSubj
      .pipe(
        ofType(
          TodoListActions.createTodoList,
          TodoListActions.loadTodoList,
          TodoListActions.removeTodoList,
          TodoListActions.updateTodoList
        )
      )
      .subscribe(() => {
        this.snackBar.open('Processando...', undefined, {
          horizontalPosition: 'left',
          verticalPosition: 'top',
        });
      });

    // Remove o carregamento
    this.actionsSubj
      .pipe(
        ofType(
          TodoListActions.createTodoListSuccess,
          TodoListActions.loadTodoListSuccess,
          TodoListActions.removeTodoListSuccess,
          TodoListActions.updateTodoListSuccess
        )
      )
      .subscribe(() => {
        this.snackBar.dismiss();
      });
  }

  ngOnInit() {
    this.store.dispatch(TodoListActions.loadTodoList());
  }

  create() {
    this.store.dispatch(
      TodoListActions.createTodoList({
        task: {
          description: this.description.value,
        },
      })
    );
    this.description.setValue('');
  }

  remove(task: Task) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '320px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(
          TodoListActions.removeTodoList({ taskId: task.id })
        );
      }
    });
  }

  start(task: Task) {
    this.store.dispatch(
      TodoListActions.updateTodoList({
        task: {
          ...task,
          status: TaskStatus.Doing,
        },
      })
    );
  }

  restart(task: Task) {
    this.start(task);
  }

  stop(task: Task) {
    this.store.dispatch(
      TodoListActions.updateTodoList({
        task: {
          ...task,
          status: TaskStatus.ToDo,
        },
      })
    );
  }

  conclude(task: Task) {
    this.store.dispatch(
      TodoListActions.updateTodoList({
        task: {
          ...task,
          status: TaskStatus.Done,
        },
      })
    );
  }
}
