export const PATHS = {
  // Public
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  // Admin
  ADMIN: "/admin",
  ADMIN_USERS: "/admin/users",
  ADMIN_PETS: "/admin/pets",
  ADMIN_DOCTORS: "/admin/doctors",
  ADMIN_APPOINTMENTS: "/admin/appointments",
  ADMIN_VACCINATIONS: "/admin/vaccinations",
  ADMIN_INVOICES: "/admin/invoices",
  ADMIN_NOTIFICATIONS: "/admin/notifications",
  ADMIN_SETTINGS: "/admin/settings",

  // Doctor
  DOCTOR: "/doctor",
  DOCTOR_APPOINTMENTS: "/doctor/appointments",
  DOCTOR_PATIENTS: "/doctor/patients",
  DOCTOR_PRESCRIPTIONS: "/doctor/prescriptions",
  DOCTOR_VACCINATIONS: "/doctor/vaccinations",
  DOCTOR_NOTIFICATIONS: "/doctor/notifications",
  DOCTOR_SETTINGS: "/doctor/settings",

  // Owner
  OWNER: "/owner",
  OWNER_PETS: "/owner/pets",
  OWNER_APPOINTMENTS: "/owner/appointments",
  OWNER_PRESCRIPTIONS: "/owner/prescriptions",
  OWNER_VACCINATIONS: "/owner/vaccinations",
  OWNER_INVOICES: "/owner/invoices",
  OWNER_NOTIFICATIONS: "/owner/notifications",
  OWNER_SETTINGS: "/owner/settings",

  // Receptionist
  RECEPTIONIST: "/receptionist",
  RECEPTIONIST_USERS: "/receptionist/users",
  RECEPTIONIST_PETS: "/receptionist/pets",
  RECEPTIONIST_APPOINTMENTS:"/receptionist/appointments",
  RECEPTIONIST_INVOICES:"/receptionist/invoices",
  RECEPTIONIST_NOTIFICATIONS:"/receptionist/notifications",
  RECEPTIONIST_SETTINGS:"/receptionist/settings",
} as const;