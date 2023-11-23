import AdminNavbar from "../components/navigation/adminNavbar";
import AdminSidebar from "../components/navigation/adminSidebar";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      {/* The sidebar is 12 in width. Therefor the left padding should always be 12 higher than other paddings */}
      <main className="pl-[13.5rem] py-6 pr-6">{children}</main>
    </>
  );
}
