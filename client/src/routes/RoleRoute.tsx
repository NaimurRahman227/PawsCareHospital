import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

import type { UserRole } from "../types/user";

interface Props {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}

const RoleRoute = ({
  allowedRoles,
  children,
}: Props) => {
  const user = useAuthStore(
    (state) => state.user
  );

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (
    !allowedRoles.includes(user.role)
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
};

export default RoleRoute;