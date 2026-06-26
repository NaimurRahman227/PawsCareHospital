import { Request, Response } from "express";
import { AuditLog } from "../models/AuditLog.js";

export const getAuditLogs = async (
  req: Request,
  res: Response
) => {
  try {
    const logs = await AuditLog.find()
      .populate("user", "name email role")
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      count: logs.length,
      data: logs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch audit logs",
    });
  }
};

export const getAuditLogsByUser = async (
  req: Request,
  res: Response
) => {
  try {
    const logs = await AuditLog.find({
      user: req.params.userId,
    })
      .populate("user", "name email role")
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      count: logs.length,
      data: logs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch user logs",
    });
  }
};

export const getAuditLogsByEntity = async (
  req: Request,
  res: Response
) => {
  try {
    const logs = await AuditLog.find({
      entity: req.params.entity,
    })
      .populate("user", "name email role")
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      count: logs.length,
      data: logs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch entity logs",
    });
  }
};