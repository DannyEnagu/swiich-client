import baseApiRoute from "./baseApiRoute";

interface AddResponse {
    isSuccess: boolean;
    message: string;
}

export interface messagesResponse {
    isSuccess: boolean;
    messages: Message[];
};

type AddBody = {
    senderId: CurrentUser['id'];
    recipientId?: CurrentUser['id'];
    departmentId?: Department['id'];
    content: string;
};

export const msgApi = baseApiRoute.injectEndpoints({
    endpoints: (builder) => ({
        postPrivateMessage: builder.mutation<AddResponse, AddBody>({
            query: (body) => ({
                url: '/message/private',
                method: 'POST',
                body
            }),
        }),
        postGroupMessage: builder.mutation<AddResponse, AddBody>({
            query: (body) => ({
                url: '/message/group',
                method: 'POST',
                body
            }),
        }),
        getPrivateMessages: builder.query({
            query: ({receiverId, senderId}: {
                receiverId: CurrentUser['id'];
                senderId: CurrentUser['id'];
            }) => `/message/private?receiverId=${receiverId}&senderId=${senderId}`
        }),
        getGroupMessages: builder.query({
            query: (groupId: Department['id']) => `/message/group?departmentId=${groupId}`
        }),
    })
});

export const {
    usePostPrivateMessageMutation,
    usePostGroupMessageMutation,
    useGetPrivateMessagesQuery,
    useGetGroupMessagesQuery,
} = msgApi;