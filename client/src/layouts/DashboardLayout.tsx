import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import type { MenuItem } from "../types/menu";

interface Props {
  menu: MenuItem[];
}

const DashboardLayout = ({
  menu,
}: Props) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar items={menu} />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;