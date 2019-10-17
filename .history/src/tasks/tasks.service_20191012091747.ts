import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Tas = [];

  getAllTasks() {
    return this.tasks;
  }
}
