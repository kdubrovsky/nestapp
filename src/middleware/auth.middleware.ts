import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware auth control:');
    console.log('Auth header: ', req.headers.authorization);
    if (!req.headers['authorization']) {
      return res.status(403).send('Forbidden');
    }
    next();
  }
}

// http http://localhost:3000/tasks/secret
// http http://localhost:3000/tasks/secret Authorization:'My valid token'
