import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, LessThan, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import RankTasks, { TaskRanking } from './task.utils';

interface BacklogTasks {
  backlog: TaskEntity[];
  done: TaskEntity[];
}

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private _taskRepository: Repository<TaskEntity>,
  ) {}

  public create(createTaskDto: CreateTaskDto) {
    return this._taskRepository.save<CreateTaskDto>(createTaskDto);
  }

  public async findAll() {
    return this._taskRepository.find();
  }

  public async focus() {
    const tasks = await this._getTasks();
    const rankedTasks: TaskRanking[] = new RankTasks(tasks)
      .rank()
      .map(({ score, ...rest }: TaskRanking) => ({ ...rest }));

    return rankedTasks;
  }

  public async backlog() {
    return (await this._getTasks(true)).reduce(
      (previousValue: BacklogTasks, currentValue: TaskEntity) => ({
        backlog: !currentValue.isDone
          ? [...previousValue.backlog, currentValue]
          : previousValue.backlog,
        done: currentValue.isDone
          ? [...previousValue.done, currentValue]
          : previousValue.done,
      }),
      { backlog: [], done: [] },
    );
  }

  public async toggleIsDone(id: string) {
    const isTaskDone: Date | null = (await this._taskRepository.findOne({
      where: {
        id,
      },
      select: {
        isDone: true,
      },
    })) as unknown as Date | null;

    return this._taskRepository.update(
      { id },
      { isDone: isTaskDone ? null : new Date() },
    );
  }

  public findOne(id: string) {
    return this._taskRepository.findOne({ where: { id } });
  }

  public update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  public remove(id: string) {
    return this._taskRepository.softDelete(id);
  }

  private _getTasks(isBacklog = false) {
    const date = new Date().toISOString().split('T')[0];
    const listToRetreive = isBacklog ? LessThan(date) : MoreThanOrEqual(date);

    return this._taskRepository.find({
      where: [{ isDone: IsNull() }, { isDone: listToRetreive }],
    });
  }
}
