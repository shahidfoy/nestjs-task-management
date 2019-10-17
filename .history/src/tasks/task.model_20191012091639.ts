import { TasksService } from "./tasks.service";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TasksS
}

enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}
