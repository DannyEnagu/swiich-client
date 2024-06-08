
import Main from "@/components/dashboard/MainContainer";
import { Header } from "./Components";
import ProjectList from "./ProjectList";

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
        {children}
      </Main>
    </div>
  );
}