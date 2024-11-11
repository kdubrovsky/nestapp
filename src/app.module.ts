import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './middleware/auth.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TasksController);
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'tasks/secret*', method: RequestMethod.GET });
  }
}
