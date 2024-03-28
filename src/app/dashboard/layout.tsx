import ProfileToggle from "@/components/dashboard/ProfileToggle";
import ToolsBar from "@/components/dashboard/ToolsBar/ToolsBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <main className="dd-canvas dark-mode">
    <main className="dd-canvas">
      <aside className="dd-canvas__sidebar">
        <ToolsBar />
        <ProfileToggle />
      </aside>
      <section className="dd-canvas__content">
        {children}
      </section>
    </main>
  );
}