import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Add to Resend Audience (if you have an audience ID)
    // First, create an audience in your Resend dashboard, then add the ID here
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email: email,
          audienceId: process.env.RESEND_AUDIENCE_ID,
        })
      } catch (contactError) {
        // Contact might already exist, continue anyway
        console.log('Contact already exists or error adding to audience:', contactError)
      }
    }

    // Send notification to yourself
    await resend.emails.send({
      from: 'Mapshot Waitlist <waitlist@kottio.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
      subject: 'New Mapshot Waitlist Signup! 🎉',
      html: `
        <h2>New waitlist signup!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    // Send welcome email to the user
    await resend.emails.send({
      from: 'Mapshot <noreply@kottio.dev>',
      to: email,
      subject: 'Welcome to Mapshot! 📸',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #9333ea;">Welcome to Mapshot!</h1>
          <p>Thank you for joining our waitlist. You're now part of an exclusive community of photographers who will be among the first to experience Mapshot.</p>

          <h2 style="color: #9333ea;">What happens next?</h2>
          <ul>
            <li>We'll keep you updated on our development progress</li>
            <li>You'll get early access when we launch</li>
            <li>As a founding member, you'll receive special perks and features</li>
          </ul>

          <p>We can't wait to see the amazing shots you'll capture!</p>

          <p style="margin-top: 30px;">
            Best regards,<br/>
            The Mapshot Team
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Successfully joined waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
