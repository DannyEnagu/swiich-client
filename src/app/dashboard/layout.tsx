"use client";
import Modal from "@/components/ui/Modal/Modal";
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
          <Modal>
            <Modal.Summary>
              <ProfileToggle
                currentUserName='John Doe'
                profilePic="" 
              /> 
            </Modal.Summary>
            <Modal.Content>
              <div>
                <h3>Modal Title</h3>
                <p>Modal Content</p>
              </div>
              </Modal.Content>
          </Modal>
        </div>
      </aside>
      <section className="dd-canvas__content">
        {children}
      </section>
    </main>
  );
}