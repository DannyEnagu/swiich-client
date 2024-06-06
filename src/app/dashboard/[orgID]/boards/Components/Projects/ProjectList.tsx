import FilterableNav from "@/components/dashboard/Nav/FilterableNav";

const projects: NavProps[] = [
  {
    boardName: 'Project 1',
    boardID: 1,
    boardImg: '',
    isStarred: true,
    boardTasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Task 1 description',
        dueDate: '2022-01-01',
        assignee: 'User 1',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Task 2 description',
        dueDate: '2022-01-01',
        assignee: 'User 2',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
    ],
  },
  {
    boardName: 'Project 2',
    boardID: 2,
    boardImg: '',
    isStarred: true,
    boardTasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Task 1 description',
        dueDate: '2022-01-01',
        assignee: 'User 1',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Task 2 description',
        dueDate: '2022-01-01',
        assignee: 'User 2',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
    ],
  },
  {
    boardName: 'Project 3',
    boardID: 3,
    boardImg: '',
    isStarred: true,
    boardTasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Task 1 description',
        dueDate: '2022-01-01',
        assignee: 'User 1',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Task 2 description',
        dueDate: '2022-01-01',
        assignee: 'User 2',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
    ],
  },
  {
    boardName: 'Project 4',
    boardID: 4,
    boardImg: '',
    isStarred: true,
    boardTasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Task 1 description',
        dueDate: '2022-01-01',
        assignee: 'User 1',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Task 2 description',
        dueDate: '2022-01-01',
        assignee: 'User 2',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
    ],
  },
  {
    boardName: 'Project 5',
    boardID: 5,
    boardImg: '',
    isStarred: true,
    boardTasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Task 1 description',
        dueDate: '2022-01-01',
        assignee: 'User 1',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Task 2 description',
        dueDate: '2022-01-01',
        assignee: 'User 2',
        status: 'In Progress',
        comments: [
          {
            id: 1,
            comment: 'Comment 1',
            commenter: 'User 1',
            date: '2022-01-01',
          },
          {
            id: 2,
            comment: 'Comment 2',
            commenter: 'User 2',
            date: '2022-01-01',
          },
        ],
      },
    ],
  },
];

export default function ProjectList() {
  return (
    <FilterableNav items={projects} />
  );
}