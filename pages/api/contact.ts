import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import moment from "moment";
import "moment-timezone";

import { renderEmailTemplate } from "../../utils/helpers";

// initialize mail transporter
const mailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    // validate argument values
    if (
      !(
        _.isString(firstName) &&
        _.isString(lastName) &&
        _.isString(email) &&
        _.isString(message)
      )
    ) {
      return res.status(422).end("Unprocessable entity.");
    }

    // Read the email template file
    const responseEmailPath = path.join(
      process.cwd(),
      "emails/responseEmail.html"
    );
    const forwardEmailPath = path.join(
      process.cwd(),
      "emails/forwardEmail.html"
    );
    const responseEmailTemplate = fs.readFileSync(responseEmailPath, "utf8");
    const forwardEmailTemplate = fs.readFileSync(forwardEmailPath, "utf8");

    // compose the email message
    const responseEmailContent = {
      from: {
        name: "Sengkhun Lim",
        address: String(process.env.EMAIL_USER),
      },
      to: email,
      subject: "Thank you for Reaching Out!",
      html: renderEmailTemplate(responseEmailTemplate, { firstName }),
    };

    const forwardEmailContent = {
      from: {
        name: "Sengkhun Lim",
        address: String(process.env.EMAIL_USER),
      },
      to: String(process.env.EMAIL_USER),
      subject: `Message from ${firstName}`,
      html: renderEmailTemplate(forwardEmailTemplate, {
        firstName,
        lastName,
        email,
        message,
        date: moment().tz("Australia/Adelaide").format("YYYY-MM-DD h:mm a"),
      }),
    };

    try {
      // Send response email to client
      await Promise.all([
        mailTransporter.sendMail(responseEmailContent),
        mailTransporter.sendMail(forwardEmailContent),
      ]);

      res.status(200).end("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).end("Error sending email");
    }
  } else {
    res.status(405).end("Method not allowed");
  }
}
