export interface TasksState {
    isLoading: boolean,
    tasks: {
        [x: string]: any
        task_yesterday: string,
        task_today: string,
        blocker: string,
        id: number
    }
    actionTypes: string,
}

// export type taskLog
// export type taskLog = {
//     task_yesterday: string;
//     task_today: string;
//     blocker: string;
//     id: number
// }