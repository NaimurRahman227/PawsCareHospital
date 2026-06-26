import express from "express";
import cors from "cors";
import petRoutes from "./routes/pet.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import authRoutes from "./routes/auth.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import prescriptionRoutes from "./routes/prescription.routes.js";
import invoiceRoutes from "./routes/invoice.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import medicalRecordRoutes from "./routes/medicalRecord.routes.js";
import vaccinationRoutes from "./routes/vaccination.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import auditRoutes from "./routes/audit.routes.js";


const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/doctors", doctorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/medical-records", medicalRecordRoutes);
app.use("/api/vaccinations", vaccinationRoutes);
app.use("/api/uploads",uploadRoutes);
app.use("/api/notifications",notificationRoutes);
app.use("/api/audit-logs", auditRoutes);

export default app;
