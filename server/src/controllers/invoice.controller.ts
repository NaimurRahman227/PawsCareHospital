import { Request, Response } from "express";
import { Invoice } from "../models/Invoice.js";
import { QueryFeatures } from "../utils/queryFeatures.js";

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
  try {
    const limit =
      Number(req.query.limit) || 10;

    const page =
      Number(req.query.page) || 1;

    const features = new QueryFeatures(
      Invoice.find(),
      req.query
    )
      .filter()
      .sort()
      .paginate();

    const invoices =
      await features.query;

    const total =
      await Invoice.countDocuments();

    res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPages:
        Math.ceil(total / limit),
      count: invoices.length,
      data: invoices,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch invoices",
    });
  }
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