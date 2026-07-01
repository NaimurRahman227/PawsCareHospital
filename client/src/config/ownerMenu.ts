import type { MenuItem } from "../types/menu";

import {
  LayoutDashboard,
  PawPrint,
  CalendarDays,
  FileText,
  Receipt,
  Syringe,
  Bell,
  Settings,
} from "lucide-react";

import { PATHS } from "../constants/paths";

export const ownerMenu: MenuItem[] = [
  {
    title: "Dashboard",
    path: PATHS.OWNER,
    icon: LayoutDashboard,
  },
  {
    title: "My Pets",
    path: PATHS.OWNER_PETS,
    icon: PawPrint,
  },
  {
    title: "Appointments",
    path: PATHS.OWNER_APPOINTMENTS,
    icon: CalendarDays,
  },
  {
    title: "Prescriptions",
    path: PATHS.OWNER_PRESCRIPTIONS,
    icon: FileText,
  },
  {
    title: "Vaccinations",
    path: PATHS.OWNER_VACCINATIONS,
    icon: Syringe,
  },
  {
    title: "Invoices",
    path: PATHS.OWNER_INVOICES,
    icon: Receipt,
  },
  {
    title: "Notifications",
    path: PATHS.OWNER_NOTIFICATIONS,
    icon: Bell,
  },
  {
    title: "Settings",
    path: PATHS.OWNER_SETTINGS,
    icon: Settings,
  },
];