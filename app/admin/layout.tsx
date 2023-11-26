import AdminNavbar from "../components/navigation/adminNavbar";
import AdminSidebar from "../components/navigation/adminSidebar";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <>
      <AdminSidebar />
      <AdminNavbar />
      <main className="pl-[13.5rem] pt-[4.5rem] pb-6 pr-6">{children}</main>
    </>
  );
}
