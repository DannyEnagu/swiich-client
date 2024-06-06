"use client";

import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/ChatHeader/Header";
import withContentWrapper from "@/components/dashboard/ContentWrapper";
import Posts from "@/components/dashboard/Posts";
import FilterableNav from "@/components/dashboard/Nav/FilterableNav";

const PostsWrapper = withContentWrapper(Posts, true);

const groups: NavProps[] = [
  {
    groupID: 1,
    groupTitle: "Group 1",
    groupMsgCount: 7,
    groupImg: "",
    isPublicGroup: true,
    type: "group",
  },
  {
    groupID: 2,
    groupTitle: "Group 2",
    groupMsgCount: 4,
    groupImg: "",
    isPublicGroup: false,
    type: "group",
  },
  {
    groupID: 3,
    groupTitle: "Group 3",
    groupMsgCount: 0,
    groupImg: "",
    isPublicGroup: true,
    type: "group",
  },
  {
    groupID: 4,
    groupTitle: "Group 4",
    groupMsgCount: 0,
    groupImg: "",
    isPublicGroup: false,
    type: "group",
  },
  {
    groupID: 5,
    groupTitle: "Group 5",
    groupMsgCount: 0,
    groupImg: "",
    isPublicGroup: false,
    type: "group",
  },
];



export default function page() {
  const handleAdd = (vales: any) => {
    console.log(vales);
  };
  return (
    <div className="dd-content">
      <FilterableNav
        items={groups}
        showCreateButton
        CreateButtonProps={{
          title: "Create Group",
          displayText: "Add Group",
          onAdd: handleAdd
        }}
      />
      <Header isDm={false} />
      <Main>
        <PostsWrapper Posts={'Helllolkfopewkpo'} />
      </Main>
    </div>
  );
}
