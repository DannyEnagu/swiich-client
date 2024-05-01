// Purpose: Layout for the board page.

import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Main from "@/components/dashboard/MainContainer";
import { ProjectList, Header } from "./Components";

export default function BoardLayout({
    children,
  }: {
    children: React.ReactNode
}) {
  return (
    <div className="dd-content">
      <ProjectList />
      <Header />
      <Main>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Main>
    </div>
  );
}