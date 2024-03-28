import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import Nav from "@/components/dashboard/Nav/Nav";
import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Posts from "@/components/dashboard/Posts";

export default function page() {
  return (
    <div className="dd-content">
      <Nav />
      <Header />
      <Main showRightSideBar>
        <ContentWrapper>
          <Posts />
        </ContentWrapper>
      </Main>
    </div>
  );
}