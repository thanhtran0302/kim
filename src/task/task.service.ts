import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, IsNull, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import RankTasks, { TaskRanking } from './task.utils';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private _taskRepository: Repository<TaskEntity>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this._taskRepository.save<CreateTaskDto>(createTaskDto);
  }

  async findAll() {
    return this._taskRepository.find();
  }

  async focus() {
    const tasks = await this._taskRepository.find({
      where: [
        { isDone: IsNull() },
        { isDone: Between(new Date(), new Date(2200, 1, 1)) },
      ],
    });
    const rankedTasks: TaskRanking[] = new RankTasks(tasks)
      .rank()
      .map(({ score, ...rest }: TaskRanking) => ({ ...rest }));

    return rankedTasks;
  }

  findOne(id: string) {
    return this._taskRepository.findOne({ where: { id } });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return this._taskRepository.softDelete(id);
  }
}
