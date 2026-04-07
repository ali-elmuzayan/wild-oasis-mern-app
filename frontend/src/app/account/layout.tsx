import Sidebar from "@/components/layouts/Sidebar";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12">
      <Sidebar />
      <div className="py-7">{children}</div>
    </div>
  );
};

export default AccountLayout;
