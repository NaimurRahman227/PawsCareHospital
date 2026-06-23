import { Request , Response } from "express";
import { Appointment } from "../models/Appointment.js";
import { AuthRequest } from "../middleware/auth.middleware.js";
import { QueryFeatures } from "../utils/queryFeatures.js";

export const createAppointment = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const appointment =
      await Appointment.create({
        ...req.body,
        createdBy: req.user?.userId,
      });

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to create appointment",
    });
  }
};

export const getAppointments = async (
  req: Request,
  res: Response
) => {
  try {
    const limit =
      Number(req.query.limit) || 10;

    const page =
      Number(req.query.page) || 1;

    const features = new QueryFeatures(
      Appointment.find()
        .populate("pet")
        .populate("doctor"),
      req.query
    )
      .filter()
      .sort()
      .paginate();

    const appointments =
      await features.query;

    const total =
      await Appointment.countDocuments();

    res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPages:
        Math.ceil(total / limit),
      count:
        appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch appointments",
    });
  }
};

export const getAppointmentById =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const appointment =
      await Appointment.findById(
        req.params.id
      )
        .populate("pet")
        .populate("doctor");

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message:
          "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  };

export const updateAppointment =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message:
          "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  };

export const deleteAppointment =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const appointment =
      await Appointment.findByIdAndDelete(
        req.params.id
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message:
          "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Appointment deleted successfully",
    });
  };