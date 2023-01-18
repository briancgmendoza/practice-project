export interface TasksState {
    isLoading: boolean,
    tasks: taskLog[],
    tasksUpdate: taskLog,
    actionTypes: string,
}

export type taskLog = {
    task_yesterday: string;
    task_today: string;
    blocker: string;
    id?: number
}