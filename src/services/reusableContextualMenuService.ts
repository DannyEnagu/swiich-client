import baseApiRoute from "./baseApiRoute";

interface PostProjectBodyResponse {
    isSuccess: boolean;
    message: string;
    project: NavProps;
}

type PostProjectBody = {
    title: string;
    description: string;
    organisationId: string | number;
    memberEmails: string[];
};

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
        postProject: builder.mutation<PostProjectBodyResponse, PostProjectBody>({
            query: (body) => ({
                url: '/projects',
                method: 'POST',
                body
            })
        }),
    })
});

export const {
    useGetPrivateContactsQuery,
    useGetInboxContactsQuery,
    useGetProjectListQuery,
    usePostProjectMutation
} = reusableContextualMenuService;