import { TaskEntity } from './entities/task.entity';
import dayjs from 'dayjs';
import { sortBy, orderBy } from 'lodash';

dayjs().format();

export interface TaskRaking extends TaskEntity {
  score?: number;
}

class RankTasks {
  private _tasks: TaskRaking[] = [];
  private static DAYS_SCORE = 11;
  private static DUEDATE_EXPONENT = 1.3;
  private static CREATEDAT_EXPONENT = 1.2;

  constructor(tasks: TaskRaking[]) {
    this._tasks = tasks;
  }

  public rank(): TaskRaking[] {
    const tasks = orderBy(
      this._tasks.map((task: TaskEntity) => {
        return {
          ...task,
          score: this._scoreDueDateOrCreatedAt(task.createdAt, task.dueDate),
        };
      }),
      ['score'],
      ['desc'],
    );

    return tasks;
  }

  private _scoreDueDateOrCreatedAt(createdAt: Date, dueDate: Date): number {
    let score = 0;
    const today = new Date();

    if (dueDate) {
      const diffDay: number = dayjs(dueDate).diff(today, 'days', false);

      if (diffDay >= 0 && diffDay <= 10) {
        score += Math.ceil(
          (RankTasks.DAYS_SCORE - diffDay) ** RankTasks.DUEDATE_EXPONENT,
        );
      }
    }

    score += Math.ceil(
      dayjs(today).diff(createdAt, 'days', false) **
        RankTasks.CREATEDAT_EXPONENT,
    );

    return score;
  }
}

export default RankTasks;
