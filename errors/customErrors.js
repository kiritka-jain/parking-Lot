// errors/customErrors.js

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

export class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "ServerError";
    this.statusCode = 500;
  }
}
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}


