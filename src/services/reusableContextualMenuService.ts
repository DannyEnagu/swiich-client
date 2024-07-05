import baseApiRoute from "./baseApiRoute";

const reusableContextualMenuService = baseApiRoute.injectEndpoints({
    endpoints: (builder) => ({
        getPrivateContacts: builder.query({
            query: (id) => '/user/messages/?userId=' + id
        }),
        getInboxContacts: builder.query({
            query: (id) => '/contacts/?orgId=' + id
        }),
        getProjectList: builder.query({
            query: (id) => '/projects/?orgId=' + id
        }),
    })
});

export const {
    useGetPrivateContactsQuery,
    useGetInboxContactsQuery,
    useGetProjectListQuery,
} = reusableContextualMenuService;