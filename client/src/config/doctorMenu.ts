import type { MenuItem } from "../types/menu";

import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Syringe,
  Bell,
  Settings,
  PawPrint,
} from "lucide-react";

import { PATHS } from "../constants/paths";

export const doctorMenu: MenuItem[] = [
  {
    title: "Dashboard",
    path: PATHS.DOCTOR,
    icon: LayoutDashboard,
  },
  {
    title: "Appointments",
    path: PATHS.DOCTOR_APPOINTMENTS,
    icon: CalendarDays,
  },
  {
    title: "Patients",
    path: PATHS.DOCTOR_PATIENTS,
    icon: PawPrint,
  },
  {
    title: "Prescriptions",
    path: PATHS.DOCTOR_PRESCRIPTIONS,
    icon: FileText,
  },
  {
    title: "Vaccinations",
    path: PATHS.DOCTOR_VACCINATIONS,
    icon: Syringe,
  },
  {
    title: "Notifications",
    path: PATHS.DOCTOR_NOTIFICATIONS,
    icon: Bell,
  },
  {
    title: "Settings",
    path: PATHS.DOCTOR_SETTINGS,
    icon: Settings,
  },
];