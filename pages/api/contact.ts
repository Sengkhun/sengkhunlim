import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

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
      res.status(422).end("Unprocessable entity.");
      return;
    }

    // compose the email message
    const emailContent = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "New Client Details",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      const response = await mailTransporter.sendMail(emailContent);
      console.log("🚀 ~ file: contact.ts:47 ~ response:", response);
      res.status(200).end("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).end("Error sending email");
    }
  } else {
    res.status(405).end("Method not allowed");
  }
}
