import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

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

    console.log(firstName, lastName, email, message);
    res.status(200).end("Email sent successfully");

    // Create a nodemailer transporter using your configuration
    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: "your-email@gmail.com",
    //     pass: "your-email-password",
    //   },
    // });

    // Compose the email message
    // const message = {
    //   from: "your-email@gmail.com",
    //   to: "your-email@gmail.com",
    //   subject: "New Client Details",
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    // };

    // try {
    //   // Send the email
    //   await transporter.sendMail(message);
    //   res.status(200).end("Email sent successfully");
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   res.status(500).end("Error sending email");
    // }
  } else {
    res.status(405).end("Method not allowed");
  }
}
