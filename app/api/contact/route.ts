import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'defcon5ready@gmail.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Digital Estate Architect <onboarding@resend.dev>'; // Replace with verified domain in production

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (message.length > 4000) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep it under 4,000 characters.' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error('Contact form warning: RESEND_API_KEY not configured.');
      if (process.env.NODE_ENV === 'development') {
        console.log('Contact payload (development fallback):', { name, email, message });
        return NextResponse.json(
          { success: true, message: 'Message received in development mode (email service not configured).' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: 'Contact temporarily unavailable. Please call +1 (773) 920-0030.' },
        { status: 503 }
      );
    }

    const messageBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Digital Estate Architect — New Inquiry from ${name}`,
      text: messageBody,
    });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
