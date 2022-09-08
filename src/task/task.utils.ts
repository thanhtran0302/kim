import { PRIORITY_LEVEL, TaskEntity } from './entities/task.entity';
import dayjs from 'dayjs';
import { orderBy } from 'lodash';

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
          score:
            this._scoreDueDateOrCreatedAt(task.createdAt, task.dueDate) +
            this._scorePriority(task.priority),
        };
      }),
      ['score'],
      ['desc'],
    );

    return tasks;
  }

  private _scorePriority(priority: PRIORITY_LEVEL) {
    switch (priority) {
      case PRIORITY_LEVEL.LOWEST:
        return -1;
      case PRIORITY_LEVEL.LOW:
        return 0;
      case PRIORITY_LEVEL.NORMAL:
        return 1;
      case PRIORITY_LEVEL.HIGH:
        return 2;
      case PRIORITY_LEVEL.HIGHEST:
        return 3;
      case PRIORITY_LEVEL.URGENT:
        return 4;
      case PRIORITY_LEVEL.CRITICAL:
        return 5;
      default:
        return 1;
    }
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
