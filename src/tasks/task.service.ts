import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/tasks.interface';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  create(task: Task) {
    console.log('Service -> Create task');
    this.tasks.push(task);
  }

  findAll(): Task[] {
    console.log('Service -> Find all tasks');
    return this.tasks;
  }
}
