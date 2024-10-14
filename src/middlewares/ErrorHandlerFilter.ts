import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class ErrorHandlerFilter implements ExceptionFilter {
  private parse(error: Error) {
    const statusMap: { [key: string]: number } = {
      BAD_REQUEST: HttpStatus.BAD_REQUEST,
      NOT_FOUND: HttpStatus.NOT_FOUND,
    };
    const defaultStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    const status = statusMap[error.name] || defaultStatus;

    return {
      status,
      message: error.message,
    };
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let statusCode: number;
    let message: string;

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      message = exception.message;
    } else {
      const error = exception as Error;
      const parsedError = this.parse(error);
      statusCode = parsedError.status;
      message = parsedError.message;
    }

    response.status(statusCode).json({ message });

    console.log(JSON.stringify(exception));
  }
}
