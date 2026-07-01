import DashboardLayout from "./DashboardLayout";
import { adminMenu } from "../config/adminMenu";

const AdminLayout = () => {
  return (
    <DashboardLayout
      menu={adminMenu}
    />
  );
};

export default AdminLayout;