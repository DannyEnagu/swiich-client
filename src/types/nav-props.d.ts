
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
    type: 'dm';
};

interface GroupContactProps {
    groupID: Department['id'];
    groupTitle: Department['name'];
    groupMsgCount: number;
    groupMembers: Department['members'];
    groupImg?: string;
    isPublicGroup: boolean;
    type: 'group';
};

interface BoardProps {
    boardName: string;
    boardID: string | number;
    boardImg?: string;
    isStarred: boolean;
    boardTasks: any[];
    type: 'board';
};

interface Inbox extends DMContactProps {
    type: 'inbox';
};

type NavProps = DMContactProps | GroupContactProps | BoardProps | Inbox;

interface CreateContactProps {
    title: string | undefined;
    displayText: string | undefined;
    type?: 'board' | 'group' | 'dm';
}