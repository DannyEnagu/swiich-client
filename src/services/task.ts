import baseApiRoute from "./baseApiRoute";

export const taskAPis = baseApiRoute.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query<Task[], CurrentUser['id']>({
            query: (id) => '/tasks/?userId=' + id
        }),
        createTask: builder.mutation<Record<string, any>, Record<string, any>>({
            query: (body) => ({
                url: '/tasks/',
                method: 'POST',
                body
            }),
        }) 
    })
})

export const {
    useGetTasksQuery,
    useCreateTaskMutation
} = taskAPis;