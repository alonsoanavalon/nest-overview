import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'helloWorld';
  }
  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    if (task.done === false) {
      throw new HttpException('Forbidden', 404);
    }
    return task.title;
  }
}
