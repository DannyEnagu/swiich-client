import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import ContentWrapper from "@/components/dashboard/ContentWrapper";
import NavContainer from "./NavContainer";
import Messages from "@/components/dashboard/Messages";

export default function page() {
  
  return (
    <div className="dd-content">
      <NavContainer />
      <Header isDm />
      <Main>
        <ContentWrapper showFooter>
          <Messages />
        </ContentWrapper>
      </Main>
    </div>
  );
}