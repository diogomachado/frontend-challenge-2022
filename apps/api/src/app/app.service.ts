import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../libs/database/src';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './types';
import {
  Task,
  TaskStatus,
} from '@frontend-challenge/shared/util/api-interfaces';

@Injectable()
export class AppService {
  constructor(private dbService: DatabaseService) {}

  async list() {
    return this.dbService.db
      .sublevel('tasks')
      .values({ valueEncoding: 'json' })
      .all();
  }

  async add(task: CreateTaskDTO) {
    const uid = uuid();
    await this.dbService.db.sublevel('tasks').put<string, Task>(
      uid,
      {
        id: uid,
        description: task.description,
        status: TaskStatus.ToDo,
      },
      { valueEncoding: 'json' }
    );
    return this.dbService.db.sublevel('tasks').get(uid);
  }

  async remove(taskId: string) {
    return this.dbService.db.sublevel('tasks').del(taskId);
  }

  async update(task: Task) {
    await this.dbService.db.sublevel('tasks').put<string, Task>(
      task.id,
      {
        id: task.id,
        description: task.description,
        status: task.status,
      },
      { valueEncoding: 'json' }
    );
    return this.dbService.db.sublevel('tasks').get(task.id);
  }
}
