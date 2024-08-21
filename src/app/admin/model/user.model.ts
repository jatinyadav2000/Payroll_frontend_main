export class User {
    role: any;
        constructor(
          public firstName?: string,
          public lastName?: string,
          public email?: string,
          public mobile?: string,
          public password?: string,
          public gender?: string,
          public salary ?: string,
          public manager ?: string,
          public employeeId ?: number,
          public designation?:string
        ) {}
      }