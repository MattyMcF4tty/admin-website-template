import AdminNavbar from "./components/navbar/AdminNavbar";
import AdminSidebar from "./components/sidebar/adminSidebar";


export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <>
      <nav className="fixed z-50">
        <AdminNavbar/>
        <AdminSidebar/>
      </nav>
        <main className="pl-[13.5rem] pt-[4.5rem] pb-6 pr-6">{children}</main>
    </>
  );
}
