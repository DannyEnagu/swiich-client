import ContentWrapper from "@/components/dashboard/ContentWrapper";
import Main from "@/components/dashboard/MainContainer";

export default function Page() {
  return (
    <div className="dd-content">
      <nav>nav list</nav>
      <Main>
        <ContentWrapper>
          <>General settings</>
        </ContentWrapper>
      </Main>
    </div>
  );
}