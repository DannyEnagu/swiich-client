import Dashboard from "./Dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dashboard>
      {children}
    </Dashboard>
  );
}