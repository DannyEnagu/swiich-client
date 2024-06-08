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

        <div>
            <ProfileToggle /> 
          {/* <Modal title="Modal title">
            <Modal.Summary>
            </Modal.Summary>
            <Modal.Content>
              <div>
                <h3>Modal Title 6</h3>
                <p>Modal Content</p>
              </div>
              </Modal.Content>
          </Modal> */}
        </div>
      </aside>
      <section className="dd-canvas__content">
        {children}
      </section>
    </main>
  );
}