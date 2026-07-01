import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import AdminDashboard from "../pages/admin/Dashboard";
import DoctorDashboard from "../pages/doctor/Dashboard";
import OwnerDashboard from "../pages/owner/Dashboard";
import ReceptionistDashboard from "../pages/receptionist/Dashboard";

import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import DoctorLayout from "../layouts/DoctorLayout";
import OwnerLayout from "../layouts/OwnerLayout";
import ReceptionistLayout from "../layouts/ReceptionistLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleRoute from "./RoleRoute";

import { PATHS } from "../constants/paths";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route
          element={<AuthLayout />}
        >
          <Route
            path={PATHS.LOGIN}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path={PATHS.REGISTER}
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>

        {/* Admin */}
        <Route
          path={PATHS.ADMIN}
          element={
            <ProtectedRoute>
              <RoleRoute
                allowedRoles={[
                  "admin",
                ]}
              >
                <AdminLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <AdminDashboard />
            }
          />
        </Route>

        {/* Doctor */}

        <Route
          path={PATHS.DOCTOR}
          element={
            <ProtectedRoute>
              <RoleRoute
                allowedRoles={[
                  "doctor",
                ]}
              >
                <DoctorLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <DoctorDashboard />
            }
          />
        </Route>

        {/* Owner */}

        <Route
          path={PATHS.OWNER}
          element={
            <ProtectedRoute>
              <RoleRoute
                allowedRoles={[
                  "owner",
                ]}
              >
                <OwnerLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <OwnerDashboard />
            }
          />
        </Route>

        {/* Receptionist */}

        <Route
          path={PATHS.RECEPTIONIST}
          element={
            <ProtectedRoute>
              <RoleRoute
                allowedRoles={[
                  "receptionist",
                ]}
              >
                <ReceptionistLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ReceptionistDashboard />
            }
          />
        </Route>

        {/* Root */}

        <Route
          path="/"
          element={
            <Navigate
              to={PATHS.LOGIN}
              replace
            />
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={
            <h1>
              404 Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;