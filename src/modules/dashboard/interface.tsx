export interface TasksState {
    isLoading: boolean,
    tasks: {
        task_yesterday: string;
        task_today: string;
        blocker: string;
        id: number
    }
    actionTypes: string,
}