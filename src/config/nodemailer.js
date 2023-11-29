import nodemailer from "nodemailer";

export const transportner = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

export const mailOption = {
  from: process.env.NEXT_PUBLIC_EMAIL,
  to: process.env.NEXT_PUBLIC_EMAIL,
};
