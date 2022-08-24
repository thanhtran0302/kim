import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';

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
    const tasks = await this._taskRepository.find();

    return tasks.map(
      ({ title, description, createdAt, updatedAt, dueDate, id }) => ({
        id,
        title,
        description,
        createdAt,
        updatedAt,
        dueDate,
      }),
    );
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
