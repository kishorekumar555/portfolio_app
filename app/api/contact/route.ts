import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kishoreguru577@gmail.com', // Your email
    pass: process.env.EMAIL_PASSWORD // Create an app password in your Google Account
  }
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    
    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: json.name,
        email: json.email,
        message: json.message,
      },
    });

    // Send email
    const mailOptions = {
      from: json.email,
      to: 'kishoreguru577@gmail.com',
      subject: `New Contact Form Submission from ${json.name}`,
      text: `
Name: ${json.name}
Email: ${json.email}
Message: ${json.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${json.name}</p>
<p><strong>Email:</strong> ${json.email}</p>
<p><strong>Message:</strong></p>
<p>${json.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 