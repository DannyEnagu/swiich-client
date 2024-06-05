interface CurrentUser {
    id: string | number | undefined;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    organizations: Array<any>;
    departments: Array<any>;
    role: Array<any>;
}

