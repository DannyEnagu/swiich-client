import baseApiRoute from "./baseApiRoute";

interface AddResponse extends Organization {
    isSuccess: boolean;
    message: string;
}

type AddBody = {
    userId: string | number;
    name: string;
};

export const orgApi = baseApiRoute.injectEndpoints({
    endpoints: (builder) => ({
        getOrganization: builder.query({
            query: (id) => '/organisations/?orgId=' + id
        }),
        addOrganization: builder.mutation<AddResponse, AddBody>({
            query: (body) => ({
                url: '/organisation/create',
                method: 'POST',
                body
            }),
        })
    })
});

export const {
    useGetOrganizationQuery,
    useAddOrganizationMutation
} = orgApi;