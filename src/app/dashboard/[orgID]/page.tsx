import Main from "@/components/dashboard/MainContainer";
import ContentWrapper from "@/components/dashboard/ContentWrapper";
import NavContainer from "./NavContainer";
import Welcome from "@/components/dashboard/Welcome";

export default function page() {
  
  return (
    <div className="dd-content">
      <NavContainer />
      <Main>
        <ContentWrapper>
          <Welcome />
        </ContentWrapper>
      </Main>
    </div>
  );
}