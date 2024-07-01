
interface DMContactProps {
    contactID: string | number;
    contactName: string;
    senderStatus: string;
    messageStatus: string;
    profilePic: string;
    lastMessage: string;
    messagesCount: number;
    timeStamps: string;
    typing?: boolean;
    type?: 'dm' | 'group';
};

interface GroupContactProps {
    groupID: Department['id'];
    groupTitle: Department['name'];
    groupMsgCount: number;
    groupMembers: Department['members'];
    groupImg?: string;
    isPublicGroup: boolean;
    type?: 'group';
};

interface BoardProps {
    boardName: string;
    boardID: string | number;
    boardImg?: string;
    isStarred: boolean;
    boardTasks: any[];
};

type NavProps = DMContactProps | GroupContactProps | BoardProps;