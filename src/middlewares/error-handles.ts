import { NextFunction, Request, Response } from 'express';

const errors: { [errorName: string]:number } = {
  ValidationError: 400,
  NotFoundError: 404,
};

const errorhandlerMiddleware = (
  err: Error,
  _req:Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = errors[err.name];
  if (!status) res.sendStatus(500);
  res.status(status).json({ message: err.message });
};

export default errorhandlerMiddleware;