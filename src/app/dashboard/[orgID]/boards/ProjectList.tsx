'use client';

import FilterableNav from "@/components/dashboard/Nav/FilterableNav";
import { selectOrganization } from "@/lib/features/organizationSlice";
import { selectMenuByType, setMenu } from "@/lib/features/reusableContextualMenuSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetProjectListQuery } from "@/services/reusableContextualMenuService";
import { useEffect } from "react";

const projects: NavProps[] = [
  {
    boardName: 'Project 1',
    boardID: 1,
    boardImg: '',
    isStarred: true,
    type: 'board',
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
    type: 'board',
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
    type: 'board',
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
    type: 'board',
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
    type: 'board',
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
  const dispatch = useAppDispatch();
  const orgID = useAppSelector(selectOrganization).id;
  const { data, isError, isLoading } = useGetProjectListQuery(orgID);

  // const projects = useAppSelector((state) => selectMenuByType(state, 'board'));

  useEffect(() => {
    if (data && !isError && !isLoading) {
      const projects = data.map((project: any) => ({
        boardName: project.name,
        boardID: project.id,
        boardImg: '',
        isStarred: true,
        type: 'board',
        boardTasks: project.tasks.map((task: any) => ({
          id: task.id,
          name: task.name,
          description: task.description,
          dueDate: task.dueDate,
          assignee: task.assignee,
          status: task.status,
          comments: task.comments.map((comment: any) => ({
            id: comment.id,
            comment: comment.comment,
            commenter: comment.commenter,
            date: comment.date,
          })),
        })),
      }));

      dispatch(setMenu(projects));
    }
  }, [
    dispatch,
    data,
    isError,
    isLoading,
  ]);

  return (
    <FilterableNav
      items={projects}
      isLoading={isLoading}
      CreateButtonProps={{ title: 'Create Project', displayText: 'Add Project', type: 'board' }}
    />
  );
}