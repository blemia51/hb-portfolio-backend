import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

@Injectable()
export class ContactService {
    private transporter: nodemailer.Transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_SERVER,
            port: parseInt(process.env.SMTP_PORT),
            secure: false, // to enable http
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_API_KEY,
            },
          });
    }
  async sendEmail(name: string, email: string) {

    // Mail options
    const mailOptions = {
      from: 'herve.bourelle@gmail.com',
      to: email, // recipient's email
      subject: `Resume Submission for ${name}`,
      text: `Hello ${name},\n You have received the resume from Hervé Bourelle`,
      attachments: [
        {
          filename: 'resume.pdf', // The file name to show in the email
          path: 'http://localhost:8000/resume.pdf', // The file path of the resume
        },
      ],
    };

    // Send the email
    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email via SMTP:', error);
      return { success: false, message: 'Failed to send email' };
    }
  }
}

