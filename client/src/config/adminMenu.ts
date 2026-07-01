import {
  LayoutDashboard,
  Users,
  PawPrint,
  CalendarDays,
  Stethoscope,
  Syringe,
  Receipt,
  Bell,
  Settings,
} from "lucide-react";

import type { MenuItem } from "../types/menu";

import { PATHS } from "../constants/paths";

export const adminMenu: MenuItem[] = [
  {
    title: "Dashboard",
    path: PATHS.ADMIN,
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    title: "Pets",
    path: "/admin/pets",
    icon: PawPrint,
  },
  {
    title: "Doctors",
    path: "/admin/doctors",
    icon: Stethoscope,
  },
  {
    title: "Appointments",
    path: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    title: "Vaccinations",
    path: "/admin/vaccinations",
    icon: Syringe,
  },
  {
    title: "Invoices",
    path: "/admin/invoices",
    icon: Receipt,
  },
  {
    title: "Notifications",
    path: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];