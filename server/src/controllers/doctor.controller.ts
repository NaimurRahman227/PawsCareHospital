import { Request, Response } from "express";
import { Doctor } from "../models/Doctor.js";

export const createDoctor = async (
  req: Request,
  res: Response
) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create doctor",
    });
  }
};

export const getAllDoctors = async (
  req: Request,
  res: Response
) => {
  const doctors = await Doctor.find();

  res.status(200).json({
    success: true,
    data: doctors,
  });
};

export const getDoctorById = async (
  req: Request,
  res: Response
) => {
  const doctor = await Doctor.findById(
    req.params.id
  );

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  res.status(200).json({
    success: true,
    data: doctor,
  });
};

export const updateDoctor = async (
  req: Request,
  res: Response
) => {
  const doctor =
    await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  res.status(200).json({
    success: true,
    data: doctor,
  });
};

export const deleteDoctor = async (
  req: Request,
  res: Response
) => {
  const doctor =
    await Doctor.findByIdAndDelete(
      req.params.id
    );

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  res.status(200).json({
    success: true,
    message:
      "Doctor deleted successfully",
  });
};