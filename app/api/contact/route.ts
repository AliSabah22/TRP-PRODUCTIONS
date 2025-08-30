import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from TRP Creative Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Project Type: ${projectType || 'Not specified'}

Message:
${message}

---
This message was sent from the TRP Creative website contact form.
    `;

    // For now, we'll log the email content
    // In production, you would integrate with an email service like SendGrid, Resend, or Nodemailer
    console.log('Email to be sent to trpcreative256@gmail.com:');
    console.log(emailContent);

    // TODO: Integrate with email service
    // Example with a service like Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'trpcreative256@gmail.com',
    //   subject: 'New Contact Form Submission - TRP Creative',
    //   text: emailContent,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.',
        emailContent 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
