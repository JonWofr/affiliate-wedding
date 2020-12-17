import { Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';
import * as db from '../../database';

export const sendMail = async (req: Request, res: Response) => {
  const recipientEmail = req.body.email;
  const isInterestedInNewsletter = req.body.isInterestedInNewsletter;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: functions.config().nodemailer.email,
      pass: functions.config().nodemailer.password,
    },
  });

  try {
    await db.addDocument('users', {
      email: recipientEmail,
      isInterestedInNewsletter,
    });

    await transporter.sendMail({
      from: "Wedding Website Tutorial <wedding.website.tutorial@gmail.com>",
      to: recipientEmail,
      subject: 'Wedding Website Tutorial',
      html: `
        <h1>
          Under construction
        </h1>
      `,
    });

    res.status(200).end();
  } catch (err) {
    res.status(500).send(err);
  }
};
