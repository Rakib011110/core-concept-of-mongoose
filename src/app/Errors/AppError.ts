export class AppError extends Error {
  public stutusCode: number;

  constructor(stutusCode: number, message: string, stack = '') {
    super(message);
    this.stutusCode = stutusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
