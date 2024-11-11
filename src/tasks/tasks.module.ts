import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
