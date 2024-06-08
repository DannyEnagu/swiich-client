interface CurrentUser {
    id: string | number | undefined;
    email: string;
    name: string;
    profilePic: string;
    createdAt: string;
    updatedAt: string;
    organisations: Array<any>;
    departments: Array<any>;
    role: Array<any>;
}

