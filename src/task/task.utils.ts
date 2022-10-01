import { TaskEntity } from './entities/task.entity';
import { differenceInBusinessDays } from 'date-fns';
import { orderBy } from 'lodash';

export interface TaskRanking extends TaskEntity {
  score?: number;
}

class RankTasks {
  private _tasks: TaskRanking[] = [];
  private static DAYS_SCORE = 11;
  private static DUEDATE_EXPONENT = 1.3;
  private static CREATEDAT_EXPONENT = 1.2;
  private static TIME_SPENT_ESTIMATE_EXPONENT = 1.1;
  private static HOUR_AS_MINUTES = 60;
  private static URGENCY_DAY = 5;

  constructor(tasks: TaskRanking[]) {
    this._tasks = tasks;
  }

  public rank(): TaskRanking[] {
    return orderBy(
      this._tasks.map((task: TaskEntity) => ({
        ...task,
        score:
          this._scoreDueDateOrCreatedAt(task.createdAt, task.dueDate) +
          this._scoreTimeSpentEstimate(task.timeSpentEstimate),
      })),
      ['score'],
      ['desc'],
    ).splice(0, 3);
  }

  private _scoreUrgency(
    createdAt: Date,
    dueDate: Date,
    isUrgent: boolean,
  ): number {
    let score = isUrgent ? 5 : 0;

    return score;
  }

  private _scoreTimeSpentEstimate(timeSpendEstimate: Date): number {
    if (timeSpendEstimate) {
      const [hour, minutes] = timeSpendEstimate.toString().split(':');
      const a = Number(hour) * RankTasks.HOUR_AS_MINUTES + Number(minutes);

      return Math.ceil((a / 30) ** RankTasks.TIME_SPENT_ESTIMATE_EXPONENT);
    }
    return 0;
  }

  private _scoreDueDateOrCreatedAt(createdAt: Date, dueDate: Date): number {
    let score = 0;
    const today = new Date();

    if (dueDate) {
      const diffDay: number = differenceInBusinessDays(dueDate, today);

      if (diffDay >= 0 && diffDay <= 10) {
        score += Math.ceil(
          Math.abs(RankTasks.DAYS_SCORE - diffDay) **
            RankTasks.DUEDATE_EXPONENT,
        );
      }
      score += 1;
    }

    score += Math.ceil(
      differenceInBusinessDays(today, createdAt) **
        RankTasks.CREATEDAT_EXPONENT,
    );

    return score;
  }
}

export default RankTasks;
