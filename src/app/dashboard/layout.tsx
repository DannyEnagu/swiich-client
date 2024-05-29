"use client";
import Modal from "@/components/ui/Modal/Modal";
import ProfileToggle from "@/components/dashboard/ProfileToggle";
import ToolsBar from "@/components/dashboard/ToolsBar/ToolsBar";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession();
  const currentUserName = session?.user?.name;
  return (
    // <main className="dd-canvas dark-mode">
    <main className="dd-canvas">
      <aside className="dd-canvas__sidebar">
        <ToolsBar />

        <div>
          <Modal title="Modal title">
            <Modal.Summary>
              <ProfileToggle
                currentUserName={currentUserName || ""}
                profilePic="" 
              /> 
            </Modal.Summary>
            <Modal.Content>
              <div>
                <h3>Modal Title 6</h3>
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