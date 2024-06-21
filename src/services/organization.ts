import baseApiRoute from "./baseApiRoute";

interface AddResponse extends Organization {
    isSuccess: boolean;
    message: string;
}

type AddBody = {
    userId: string | number;
    name: string;
    users: string[];
};

export const orgApi = baseApiRoute.injectEndpoints({
    endpoints: (builder) => ({
        getOrganization: builder.query({
            // Fetches a single organization
            query: (id) => '/organisations/?orgId=' + id
        }),
        getOrgMembers: builder.query({
            // Fetches all users in an organization
            query: (id) => '/organisation/users/?organisationId=' + id
        }),
        addOrganization: builder.mutation<AddResponse, AddBody>({
            // Creates a new organization
            query: (body) => ({
                url: '/organisation/create',
                method: 'POST',
                body
            }),
        }),
        updateOrgDetails: builder.mutation<AddResponse, AddBody>({
            // Updates an organization's details
            query: (body) => ({
                url: '/organisation/update',
                method: 'PUT',
                body
            }),
        })
    })
});

export const {
    useGetOrganizationQuery,
    useGetOrgMembersQuery,
    useAddOrganizationMutation,
    useUpdateOrgDetailsMutation
} = orgApi;