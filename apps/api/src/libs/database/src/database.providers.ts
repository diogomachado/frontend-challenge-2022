import {
  Task,
  TaskStatus,
} from '@frontend-challenge/shared/util/api-interfaces';
import { Level } from 'level';
import { v4 as uuid } from 'uuid';

export const databaseProviders = [
  {
    provide: 'DATABASE',
    useFactory: async () => {
      const db = await new Level('./db', { valueEncoding: 'json' });
      const tasks = db.sublevel<string, Task>('tasks', {
        valueEncoding: 'json',
      });
      await tasks.clear();

      const data: Task[] = [
        { id: uuid(), description: 'Lorem Ipsum', status: TaskStatus.Done },
        { id: uuid(), description: 'Dolor Sit Amet', status: TaskStatus.Doing },
        { id: uuid(), description: 'Consectetur', status: TaskStatus.ToDo },
      ];

      data.forEach(async (d) => await tasks.put(d.id, d));
      return db;
    },
  },
];
