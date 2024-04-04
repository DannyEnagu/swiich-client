import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Messages from "@/components/dashboard/Messages";
import NavContainer from "./NavContainer";

export default function page() {
  return (
    <div className="dd-content">
      <NavContainer />
      <Header isDm />
      <Main>
        <ContentWrapper showEditor>
          <Messages />
        </ContentWrapper>
      </Main>
    </div>
  );
}