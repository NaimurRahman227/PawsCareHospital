import { Request, Response } from "express";
import { Invoice } from "../models/Invoice.js";

export const createInvoice = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      consultationFee,
      medicineCost,
      serviceCost,
    } = req.body;

    const totalAmount =
      consultationFee +
      medicineCost +
      serviceCost;

    const invoice =
      await Invoice.create({
        ...req.body,
        totalAmount,
      });

    res.status(201).json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create invoice",
    });
  }
};

export const getInvoices = async (
  req: Request,
  res: Response
) => {
  const invoices = await Invoice.find()
    .populate("appointment")
    .populate("prescription");

  res.status(200).json({
    success: true,
    data: invoices,
  });
};

export const getInvoiceById = async (
  req: Request,
  res: Response
) => {
  const invoice =
    await Invoice.findById(
      req.params.id
    );

  if (!invoice) {
    return res.status(404).json({
      success: false,
      message: "Invoice not found",
    });
  }

  res.status(200).json({
    success: true,
    data: invoice,
  });
};

export const updateInvoice = async (
  req: Request,
  res: Response
) => {
  const invoice =
    await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

  if (!invoice) {
    return res.status(404).json({
      success: false,
      message: "Invoice not found",
    });
  }

  res.status(200).json({
    success: true,
    data: invoice,
  });
};

export const deleteInvoice = async (
  req: Request,
  res: Response
) => {
  const invoice =
    await Invoice.findByIdAndDelete(
      req.params.id
    );

  if (!invoice) {
    return res.status(404).json({
      success: false,
      message: "Invoice not found",
    });
  }

  res.status(200).json({
    success: true,
    message:
      "Invoice deleted successfully",
  });
};