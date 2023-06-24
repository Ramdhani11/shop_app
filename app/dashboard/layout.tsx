import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen bg-lightWhite flex flex-row">
      <Sidebar />
      <section className="w-[80vw] h-screen">
        <nav className="h-[10vh] bg-white flex flex-row px-6 justify-between items-center border-bottom-[1px]">
          <h1>Dashboard</h1>
          <div className="flex flex-row items-center">
            <div className="w-[30px] h-[30px] rounded-[50%] bg-red-200 mr-2" />
            <h2>Hai</h2>
          </div>
        </nav>
        {children}
      </section>
    </div>
  );
}
