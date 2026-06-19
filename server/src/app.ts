import express from "express";
import cors from "cors";
import petRoutes from "./routes/pet.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import authRoutes from "./routes/auth.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import prescriptionRoutes from "./routes/prescription.routes.js";
import invoiceRoutes from "./routes/invoice.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";


const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/doctors", doctorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/appointments",appointmentRoutes);
app.use("/api/prescriptions",prescriptionRoutes);
app.use("/api/invoices",invoiceRoutes);
app.use("/api/dashboard",dashboardRoutes);

export default app;
