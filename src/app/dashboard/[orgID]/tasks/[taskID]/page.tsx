"use client";

import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import { ProjectList, Content } from "../Components";

export default function Page() {
  return (
    <div className="dd-content">
      <ProjectList />
      <Header />
      <Main>
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      </Main>
    </div>
  );
}