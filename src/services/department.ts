import baseApiRoute from "./baseApiRoute";

interface AddResponse {
    isSuccess: boolean;
    message: string;
}

type AddBody = {
    userId: string | number;
    organisationId: string | number;
    departmentName: string;
};

type AddUserToDeptBody = {
    adminOrDeptHeadId: CurrentUser['id'];
    userIds: CurrentUser['id'][];
    departmentId: Department['id'];
};

type DepartmentUsersType = {
    departmentUsers: Department['members'];
};

export const deptApi = baseApiRoute.injectEndpoints({
    endpoints: (builder) => ({
        getDept: builder.query({
            query: (id) => '/department/?departmentId=' + id
        }),
        getDeptUsers: builder.query<DepartmentUsersType, Department['id']>({
            query: (id) => '/department/users/?departmentId=' + id
        }),
        getAllDept: builder.query({
            query: (id) => '/departments/?orgId=' + id
        }),
        addDept: builder.mutation<AddResponse, AddBody>({
            query: (body) => ({
                url: '/department/create',
                method: 'POST',
                body
            }),
        }),
        addUserToDept: builder.mutation<AddResponse, AddUserToDeptBody>({
            query: (body) => ({
                url: '/department/users',
                method: 'POST',
                body
            }),
        })
    })
});

export const {
    useGetDeptQuery,
    useGetAllDeptQuery,
    useGetDeptUsersQuery,
    useAddDeptMutation,
    useAddUserToDeptMutation,
} = deptApi;