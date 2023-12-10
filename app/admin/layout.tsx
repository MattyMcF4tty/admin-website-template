import AdminNavbar from "../components/admin/navigation/navbar/adminNavbar";
import AdminSidebar from "../components/admin/navigation/sidebar/adminSidebar";
export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <>
      <nav className="fixed h-screen w-screen">
        <AdminNavbar />
        <AdminSidebar />
      </nav>
        <main className="pl-[13.5rem] pt-[4.5rem] pb-6 pr-6">{children}</main>
    </>
  );
}
