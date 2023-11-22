import AdminSidebar from "../components/navigation/adminSidebar";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
      <AdminSidebar />
      {/* The sidebar is 12 in width. Therefor the left padding should always be 12 higher than other paddings */}
      <main className="pl-[8.5rem] py-6 pr-6">{children}</main>
    </>
  );
}
