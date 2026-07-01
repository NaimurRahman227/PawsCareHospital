import type { MenuItem } from "../types/menu";

import {
  LayoutDashboard,
  Users,
  PawPrint,
  CalendarDays,
  Receipt,
  Bell,
  Settings,
} from "lucide-react";

import { PATHS } from "../constants/paths";

export const receptionistMenu: MenuItem[] = [
  {
    title: "Dashboard",
    path: PATHS.RECEPTIONIST,
    icon: LayoutDashboard,
  },
  {
    title: "Pet Owners",
    path: PATHS.RECEPTIONIST_USERS,
    icon: Users,
  },
  {
    title: "Pets",
    path: PATHS.RECEPTIONIST_PETS,
    icon: PawPrint,
  },
  {
    title: "Appointments",
    path: PATHS.RECEPTIONIST_APPOINTMENTS,
    icon: CalendarDays,
  },
  {
    title: "Invoices",
    path: PATHS.RECEPTIONIST_INVOICES,
    icon: Receipt,
  },
  {
    title: "Notifications",
    path: PATHS.RECEPTIONIST_NOTIFICATIONS,
    icon: Bell,
  },
  {
    title: "Settings",
    path: PATHS.RECEPTIONIST_SETTINGS,
    icon: Settings,
  },
];