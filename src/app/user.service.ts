import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private static instanceCount = 0;
  private currentInstance: number;

  constructor(){
    this.currentInstance = UserService.instanceCount++;
  }

  public get userName(): string{
    return `Max Mustermann (in instance: ${this.currentInstance})`;
  }
}
