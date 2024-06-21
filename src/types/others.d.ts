interface Department {
    id: string | number | undefined;
    name: string;
    members: CurrentUser[];
    organisationID: string;
    createdAt: string;
    updatedAt: string;
};

interface Organization {
    id: string | number;
    name: string;
    departments: Department[];
    members: CurrentUser[];
    inviteLink: string;
    createdAt: string;
    updatedAt: string;
};

interface Project {
    id: string | number;
    name: string;
    organisationID: string;
    departmentID: string;
    createdAt: string;
    updatedAt: string;
};

interface Canvas {
    id: string | number;
    name: string;
    url: string;
};

interface CanvasRight {
    content: 'thread' | 'profile';
    contentID: string | number;
    isOpen: boolean; 
};

interface ActiveCanvas {
    id: string | number | undefined;
    name: string | undefined;
    url?: string;
    type: 'project' | 'department' | 'dm' | 'profile' | 'thread';
    isRightSidebarOpen?: boolean;
    rightSidebarContentType?: 'thread' | 'profile';
}

interface UISettings {
    activeProject: ActiveCanvas;
    activeDepartment: ActiveCanvas;
    activeDM: ActiveCanvas;
    profile: ActiveCanvas;
    activeThread: ActiveCanvas;
};