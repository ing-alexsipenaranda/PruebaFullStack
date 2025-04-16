export class Result<T> {
    private constructor(
      public isSuccess: boolean,
      public value?: T,
      public error?: string,
    ) {}
  
    public static Ok<T>(value: T): Result<T> {
      return new Result<T>(true, value);
    }
  
    public static Err<T>(error: string): Result<T> {
      return new Result<T>(false, undefined, error);
    }
  }