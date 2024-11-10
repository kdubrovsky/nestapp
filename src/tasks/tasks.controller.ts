import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Headers,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('tasks')
export class TasksController {
  //
  // http localhost:3000/tasks
  @Get()
  findAll() {
    return 'All tasks array response';
  }

  // Library-specific response example
  // http localhost:3000/tasks/express
  @Get('express')
  findSpecific(@Res() response: Response) {
    response.status(200).send('Express specific response');
  }

  // http localhost:3000/tasks/request
  @Get('request')
  logRequest(@Req() request: Request) {
    console.log(request.headers);
    return `Decorate params for getting Express request object. Check console for request headers`;
  }

  // http localhost:3000/tasks/host
  @Get('host')
  showIP(@Headers('host') host: string) {
    return `Host: ${host}`;
  }

  // http localhost:3000/tasks/redirect
  @Get('redirect')
  @Redirect('http://ya.ru', 301)
  redirect() {
    return 'Redirected to new url';
  }

  //  http http://localhost:3000/tasks/async
  @Get('async')
  async getAsyncResponse(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['task1', 'task2', 'task3']);
      }, 1000);
    });
  }

  // http localhost:3000/tasks/20
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Find task with id = ${id}`;
  }

  // http localhost:3000/tasks/20/delete
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return `Detele task with id = ${id}`;
  }

  // http POST localhost:3000/tasks/ id=helloworld
  @Post()
  @Header('Cache-Control', 'no-store') // specific header
  create(@Body() body: { id: string }) {
    return { ...body, date: new Date().toLocaleDateString() };
  }
}
