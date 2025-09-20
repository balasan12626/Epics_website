import { Header } from "@/components/layout/header";
import { UserTable } from "@/components/dashboard/user-table";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Dashboard Overview" />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <UserTable />
      </div>
    </div>
  );
}
