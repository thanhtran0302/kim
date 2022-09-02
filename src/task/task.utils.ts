import { TaskEntity } from './entities/task.entity';
import dayjs from 'dayjs';

dayjs().format();

export interface TaskRaking extends TaskEntity {
  score?: number;
}

class RankTasks {
  private _tasks: TaskRaking[] = [];

  constructor(tasks: TaskRaking[]) {
    this._scoreDueDateOrCreatedAt(tasks[0].createdAt, tasks[0].dueDate);
    this._tasks = tasks;
  }

  public rank(): TaskRaking[] {
    return this._tasks;
  }

  private _scoreDueDateOrCreatedAt(createdAt: Date, dueDate: Date): number {
    if (dueDate) {
      console.log({
        dueDate,
        diff: dayjs(dueDate).diff(new Date(), 'days', false),
      });
    }
    return 0;
  }
}

export default RankTasks;
