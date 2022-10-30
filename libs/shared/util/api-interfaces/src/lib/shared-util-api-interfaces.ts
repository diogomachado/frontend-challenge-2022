export enum TaskStatus {
  ToDo,
  Doing,
  Done,
}

export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
}
