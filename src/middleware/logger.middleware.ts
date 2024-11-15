import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware logs request:');
    console.log('URL: ', req.url);
    next();
  }
}
