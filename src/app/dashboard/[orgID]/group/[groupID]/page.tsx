"use client";

import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Posts from "@/components/dashboard/Posts";
import NavContainer from "./NavContainer";


export default function page() {
  return (
    <div className="dd-content">
      <NavContainer />
      <Header isDm={false} />
      <Main showRightSideBar>
        <ContentWrapper showFooter>
          <Posts />
        </ContentWrapper>
      </Main>
    </div>
  );
}
