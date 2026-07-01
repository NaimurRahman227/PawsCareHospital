import DashboardLayout from "./DashboardLayout";
import { receptionistMenu } from "../config/receptionistMenu";

const ReceptionistLayout = () => {
  return (
    <DashboardLayout
      menu={receptionistMenu}
    />
  );
};

export default ReceptionistLayout;