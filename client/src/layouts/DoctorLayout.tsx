import DashboardLayout from "./DashboardLayout";
import { doctorMenu } from "../config/doctorMenu";

const DoctorLayout = () => {
  return (
    <DashboardLayout
      menu={doctorMenu}
    />
  );
};

export default DoctorLayout;