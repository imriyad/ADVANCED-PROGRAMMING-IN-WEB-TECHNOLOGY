import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class EmailService {
  async sendOrderConfirmation(to: string) {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      throw new Error('Email credentials are missing');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use true for port 465, false for 587
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10000, 
    });

    const mailOptions = {
      from: user,
      to,
      subject: 'Order Confirmation',
      text: 'Your order has been confirmed!',
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(' Email sent:', info.response);
    } catch (error) {
      console.error(' Email sending failed:', error);
    }
  }
}
