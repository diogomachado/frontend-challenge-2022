import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from './todo-list.effects';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromTodoList.todoListFeatureKey,
      fromTodoList.reducer
    ),
    EffectsModule.forFeature([TodoListEffects]),
  ],
})
export class SharedAppDataAccessModule {}
