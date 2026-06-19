import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },

    prescription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prescription",
    },

    consultationFee: {
      type: Number,
      required: true,
    },

    medicineCost: {
      type: Number,
      default: 0,
    },

    serviceCost: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: [
        "Pending",
        "Paid",
        "Refunded"
      ],
      default: "Pending",
    },

    paymentMethod: {
      type: String,
      enum: [
        "Cash",
        "Card",
        "Bkash",
        "Nagad"
      ],
      default: "Cash",
    },
  },
  {
    timestamps: true,
  }
);

export const Invoice = mongoose.model(
  "Invoice",
  invoiceSchema
);