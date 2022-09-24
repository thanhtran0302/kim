import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { isWeekend } from 'date-fns';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiBody({ type: CreateTaskDto })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all tasks' })
  findAll() {
    return this.taskService.findAll();
  }

  @Get('/focus')
  @ApiOperation({ summary: 'Get 3 focus for the day' })
  focus() {
    if (isWeekend(new Date())) {
      return [];
    }

    return this.taskService.focus();
  }

  @Get('/backlog')
  @ApiOperation({ summary: 'Get tasks in backlog' })
  backlog() {
    if (isWeekend(new Date())) {
      return [];
    }

    return this.taskService.backlog();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one task by id' })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Patch('/done/:id')
  @ApiOperation({ summary: 'Toggle task if this one is done or not.' })
  async toggleIsDone(@Param('id') id: string) {
    return this.taskService.toggleIsDone(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Partially update information for task' })
  @ApiBody({ type: UpdateTaskDto })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
