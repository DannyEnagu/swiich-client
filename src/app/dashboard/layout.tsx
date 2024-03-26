import ToolsBar from "@/components/dashboard/ToolsBar/ToolsBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="dd-canvas">
      <aside className="dd-canvas__sidebar">
        <ToolsBar />
      </aside>
      <section className="dd-canvas__content">
        {children}
      </section>
    </main>
  );
}