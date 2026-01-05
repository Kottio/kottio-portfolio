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

    // Add to Resend Audience (same audience as Mapshot)
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
      from: 'Full Stack Data Course <course@kottio.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
      subject: 'New Full Stack Data Course Signup! 🎓',
      html: `
        <h2>New course waitlist signup!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    // Send welcome email to the user
    await resend.emails.send({
      from: 'Thomas Cottiaux <noreply@kottio.dev>',
      to: email,
      subject: 'Welcome to the Full Stack Data Course Waitlist! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Welcome to the Full Stack Data Course!</h1>
          <p>Thank you for joining the waitlist. You're taking the first step toward mastering full stack data engineering.</p>

          <h2 style="color: #7c3aed;">What happens next?</h2>
          <ul>
            <li>You'll receive exclusive early-bird pricing when enrollment opens</li>
            <li>Get access to free bonus content and resources</li>
            <li>Be the first to know about course updates and launch dates</li>
            <li>Receive tips and insights on data engineering and full stack development</li>
          </ul>

          <h2 style="color: #7c3aed;">What You'll Learn</h2>
          <p>This comprehensive course covers:</p>
          <ul>
            <li><strong>Data Engineering:</strong> SQL, ETL pipelines, and data warehousing</li>
            <li><strong>Backend Development:</strong> APIs, authentication, and deployment</li>
            <li><strong>Real Projects:</strong> Build production-ready data products</li>
            <li><strong>Best Practices:</strong> Industry standards and patterns</li>
          </ul>

          <p>I'm excited to help you build the skills to create amazing data products!</p>

          <p style="margin-top: 30px;">
            Best regards,<br/>
            Thomas Cottiaux<br/>
            <a href="https://www.kottio.dev" style="color: #7c3aed;">kottio.dev</a>
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
