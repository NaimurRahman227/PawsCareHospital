import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { PATHS } from "../constants/paths";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({
  children,
}: Props) => {
  const {
    isAuthenticated,
    isLoading,
  } = useAuthStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={PATHS.LOGIN}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;