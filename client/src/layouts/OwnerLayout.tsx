import DashboardLayout from "./DashboardLayout";
import { ownerMenu } from "../config/ownerMenu";

const OwnerLayout = () => {
  return (
    <DashboardLayout
      menu={ownerMenu}
    />
  );
};

export default OwnerLayout;