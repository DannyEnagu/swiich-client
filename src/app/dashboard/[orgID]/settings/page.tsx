import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import { General, Navigation } from "./Components";

export default function Page() {
  return (
    <div className="dd-content">
      <Navigation />
      <Header />
      <Main>
        <ContentWrapper>
          <General />
        </ContentWrapper>
      </Main>
    </div>
  );
}