import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'helloWorld';
  }
  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return task.title;
  }
}
