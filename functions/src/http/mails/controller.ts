import { Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';

export const sendMail = async (req: Request, res: Response) => {
  const recipientEmail = req.query.email as string;
  const isInterestedInNewsletter = req.query.isInterestedInNewsletter as string;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: functions.config().nodemailer.email,
        pass: functions.config().nodemailer.password
      },
    });

    const info = await transporter.sendMail({
      from: "'Wedding Website Tutorial' <nodemailer-test@example.com>",
      to: recipientEmail,
      subject: 'wedding-wix-tutorial',
      html: `
      <p>
        You signed up for the newsletter: ${isInterestedInNewsletter}
      </p>
      `,
    });

    console.log(`Message sent: ${info.messageId}`);
    // Logs the URL at which the message is displayed. The message will not be sent to the actual recipient.
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.status(200).end();
  } catch (err) {
    res.status(500).send(err);
  }
};
