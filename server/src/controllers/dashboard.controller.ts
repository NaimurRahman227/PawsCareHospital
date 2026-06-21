import { Request, Response } from "express";

import { User } from "../models/user.js";
import { Pet } from "../models/Pet.js";
import { Doctor } from "../models/Doctor.js";
import { Appointment } from "../models/Appointment.js";
import { Prescription } from "../models/Prescription.js";
import { Invoice } from "../models/Invoice.js";
import { AuthRequest } from "../middleware/auth.middleware.js";

export const getAdminDashboard = async (
  req: Request,
  res: Response
) => {
  try {
    const totalUsers =
      await User.countDocuments();

    const totalPets =
      await Pet.countDocuments();

    const totalDoctors =
      await Doctor.countDocuments();

    const totalAppointments =
      await Appointment.countDocuments();

    const totalInvoices =
      await Invoice.countDocuments();

    const revenue =
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

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalPets,
        totalDoctors,
        totalAppointments,
        totalInvoices,
        totalRevenue:
          revenue[0]?.totalRevenue || 0,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch admin dashboard",
    });
  }
};

export const getDoctorDashboard = async (
  req: Request,
  res: Response
) => {
  try {
    const totalAppointments =
      await Appointment.countDocuments();

    const pendingAppointments =
      await Appointment.countDocuments({
        status: "Pending",
      });

    const completedAppointments =
      await Appointment.countDocuments({
        status: "Completed",
      });

    const totalPrescriptions =
      await Prescription.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalAppointments,
        pendingAppointments,
        completedAppointments,
        totalPrescriptions,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch doctor dashboard",
    });
  }
};

export const getOwnerDashboard = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const ownerId = req.user?.userId;

    const totalPets =
      await Pet.countDocuments({
        owner: ownerId,
      });

    const pets = await Pet.find({
      owner: ownerId,
    });

    const petIds = pets.map(
      (pet) => pet._id
    );

    const totalAppointments =
      await Appointment.countDocuments({
        pet: { $in: petIds },
      });

    res.status(200).json({
      success: true,
      data: {
        totalPets,
        totalAppointments,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch owner dashboard",
    });
  }
};

export const getReceptionistDashboard =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const todayAppointments =
        await Appointment.countDocuments();

      const pendingPayments =
        await Invoice.countDocuments({
          paymentStatus: "Pending",
        });

      const paidPayments =
        await Invoice.countDocuments({
          paymentStatus: "Paid",
        });

      res.status(200).json({
        success: true,
        data: {
          todayAppointments,
          pendingPayments,
          paidPayments,
        },
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch receptionist dashboard",
      });
    }
  };