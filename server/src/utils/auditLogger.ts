import { Request } from "express";
import { AuditLog } from "../models/AuditLog.js";

interface AuditParams {
  req: Request;
  userId: string;
  action: string;
  entity: string;
  entityId: string;
  details?: any;
}

export const logAction = async ({
  req,
  userId,
  action,
  entity,
  entityId,
  details = {},
}: AuditParams) => {
  try {
    await AuditLog.create({
      user: userId,
      action,
      entity,
      entityId,
      details,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
    });
  } catch (error) {
    console.error("Audit Log Error:", error);
  }
};