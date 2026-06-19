import { Request, Response } from "express";

import { User } from "../models/user.js";
import { Pet } from "../models/Pet.js";
import { Doctor } from "../models/Doctor.js";
import { Appointment } from "../models/Appointment.js";
import { Prescription } from "../models/Prescription.js";
import { Invoice } from "../models/Invoice.js";

export const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalPets = await Pet.countDocuments();

    const totalDoctors =
      await Doctor.countDocuments();

    const totalAppointments =
      await Appointment.countDocuments();

    const totalPrescriptions =
      await Prescription.countDocuments();

    const totalInvoices =
      await Invoice.countDocuments();

    const pendingPayments =
      await Invoice.countDocuments({
        paymentStatus: "Pending",
      });

    const paidInvoices =
      await Invoice.countDocuments({
        paymentStatus: "Paid",
      });

    const revenueResult =
      await Invoice.aggregate([
        {
          $match: {
            paymentStatus: "Paid",
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$totalAmount",
            },
          },
        },
      ]);

    const totalRevenue =
      revenueResult[0]?.totalRevenue || 0;

    const startOfToday = new Date();

    startOfToday.setHours(
      0,
      0,
      0,
      0
    );

    const endOfToday = new Date();

    endOfToday.setHours(
      23,
      59,
      59,
      999
    );

    const todayAppointments =
      await Appointment.countDocuments({
        appointmentDate: {
          $gte: startOfToday,
          $lte: endOfToday,
        },
      });

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalPets,
        totalDoctors,
        totalAppointments,
        totalPrescriptions,
        totalInvoices,
        pendingPayments,
        paidInvoices,
        totalRevenue,
        todayAppointments,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch dashboard statistics",
    });
  }
};