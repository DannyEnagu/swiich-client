import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import Main from "@/components/dashboard/MainContainer";
import Header from "@/components/dashboard/Header/Header";
import { General, Navigation } from "./Components";

const GeneralWrapper = withContentWrapper(General);

export default function Page() {
  return (
    <div className="dd-content">
      <Navigation />
      <Header />
      <Main>
        <GeneralWrapper />
      </Main>
    </div>
  );
}