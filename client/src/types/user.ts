export type UserRole =
  | "admin"
  | "doctor"
  | "receptionist"
  | "owner";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
}