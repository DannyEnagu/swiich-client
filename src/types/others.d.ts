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

interface Message {
    id: string | number;
    senderId: string | number;
    senderName: string;
    senderEmail: string;
    recipientId?: string | number;
    recipientName?: string;
    recipientEmail?: string;
    departmentId?: string | number;
    type: 'Private' | 'Group' | 'Thread';
    content: string;
    createdAt: string;
    updatedAt: string;
};

interface MessagesResponse {
    isSuccess: boolean;
    response: Message;
    message: Message;
};

interface MessagePayload {
    senderId: CurrentUser['id'];
    recipientId?: CurrentUser['id'];
    departmentId?: Department['id'];
    content: string;
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

interface CommentType {
    id: string | number;
    comment: string;
    commenter: string;
    date: string;
};

interface Task {
    id: string | number;
    title: string;
    description: string;
    deadline: string;
    checklists: TaskCheckList[];
    assignees: CurrentUser[];
    status: string;
    createdBy: CurrentUser['id']
    comments: CommentType[];
    createdAt: string;
    updatedAt: string;
    project: Project;
    priority: 'Low' | 'Medium' | 'High';
};

interface TaskCheckList {
    title: string;
    assignedTo?: CurrentUser['email']
    status: 'Pending' | 'InProgress' | 'Completed' 
}

interface EmojiStyles extends React.CSSProperties {
    '--epr-emoji-size': string;
    '--epr-preview-height': string;
}

interface ServerToClientEvents {
    'groupMessage': (message: Message) => void;
    'private-message': (message: Message) => void;
}

interface ClientToServerEvents {
    "userConnected": (userId: CurrentUser['id']) => void;
    "join-department": (departmentId: Department['id']) => void;
    'groupMessage': (message: MessagePayload) => void;
    'private-message': (message: MessagePayload) => void;
}