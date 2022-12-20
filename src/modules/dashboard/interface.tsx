export interface taskLogState { taskLog:
    [
    tasksLog: {
        task_yesterday: string,
        task_today: string,
        blockers: string,
        id: number
    },
    loading: boolean,
    ]
}