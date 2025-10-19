import { NextRequest, NextResponse } from 'next/server';

type AssessmentData = {
  email: string;
  answers: Array<{
    questionId: string;
    value: string | string[];
    score: number;
    metadata?: any;
  }>;
  results: {
    totalScore: number;
    tier: string;
    tierLabel: string;
    investmentRange: string;
    riskLevel: string;
    urgency: string;
    currentSpend: number | null;
    projectedSavings: number;
    paybackPeriod: string;
    painPoints: string[];
    vertical: string;
    threatScore: number;
  };
};

export async function POST(request: NextRequest) {
  try {
    const data: AssessmentData = await request.json();
    const { email, answers, results } = data;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Extract key information for CRM
    const budgetAnswer = answers.find(a => a.questionId === 'budget');
    const authorityAnswer = answers.find(a => a.questionId === 'authority');
    const timelineAnswer = answers.find(a => a.questionId === 'timeline');
    const verticalAnswer = answers.find(a => a.questionId === 'vertical');
    const painAnswer = answers.find(a => a.questionId === 'pain');

    // Construct lead data
    const leadData = {
      email,
      timestamp: new Date().toISOString(),
      source: 'Sovereign Infrastructure Assessment',
      
      // Scoring
      leadScore: results.totalScore,
      tier: results.tier,
      tierLabel: results.tierLabel,
      investmentRange: results.investmentRange,
      
      // Risk & Urgency
      riskLevel: results.riskLevel,
      threatScore: results.threatScore,
      urgency: results.urgency,
      
      // Demographics
      vertical: results.vertical,
      authority: authorityAnswer?.metadata?.authority || 'unknown',
      budget: budgetAnswer?.value,
      timeline: timelineAnswer?.value,
      
      // Pain Points
      primaryPain: painAnswer?.value,
      painLevel: painAnswer?.metadata?.painLevel,
      painPoints: results.painPoints,
      
      // Financial
      currentSpend: results.currentSpend,
      projectedSavings: results.projectedSavings,
      paybackPeriod: results.paybackPeriod,
      
      // Sales Qualification
      salesPriority: results.urgency === 'critical' || results.totalScore > 150 ? 'HOT' : 
                     results.urgency === 'high' || results.totalScore > 100 ? 'WARM' : 'COLD',
      
      // Full answers for reference
      fullAssessment: answers
    };

    // 1. Send to CRM (example with generic webhook - customize for your CRM)
    // Uncomment and configure for your CRM:
    /*
    await fetch(process.env.CRM_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
    */

    // 2. Send email notification using Resend
    await sendEmailNotification(email, results, leadData);

    // 3. Send Slack notification for hot leads
    if (leadData.salesPriority === 'HOT') {
      await sendSlackNotification(leadData);
    }

    // 4. Log to database (if you have one)
    // await prisma.assessment.create({ data: leadData });

    return NextResponse.json({
      success: true,
      message: 'Assessment submitted successfully',
      pdfUrl: '/api/assessment/pdf?email=' + encodeURIComponent(email)
    });

  } catch (error) {
    console.error('Assessment submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit assessment' },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(email: string, results: any, leadData: any) {
  // Using Resend (install: npm install resend)
  // Uncomment and add RESEND_API_KEY to your .env:
  
  /*
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'Ehab Allababidi <ehab@backupestate.vercel.app>',
    to: email,
    subject: `Your ${results.tierLabel} Roadmap - Sovereign Infrastructure Assessment`,
    html: generateEmailHTML(results, leadData),
    attachments: [
      {
        filename: 'sovereign-estate-roadmap.pdf',
        content: await generatePDF(results, leadData)
      }
    ]
  });
  */

  // For now, just log it
  console.log('Email would be sent to:', email);
  console.log('Results:', results);
}

async function sendSlackNotification(leadData: any) {
  // Slack webhook for hot lead notifications
  // Add SLACK_WEBHOOK_URL to your .env
  
  if (!process.env.SLACK_WEBHOOK_URL) {
    console.log('Slack webhook not configured');
    return;
  }

  try {
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🔥 HOT LEAD: ${leadData.email}`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*🔥 HOT LEAD ALERT*\n\n*Email:* ${leadData.email}\n*Score:* ${leadData.leadScore}\n*Tier:* ${leadData.tierLabel}\n*Risk Level:* ${leadData.riskLevel}\n*Urgency:* ${leadData.urgency}\n*Vertical:* ${leadData.vertical}`
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Budget:* ${leadData.investmentRange}\n*Current Spend:* $${(leadData.currentSpend || 0).toLocaleString()}/year\n*Projected Savings:* $${leadData.projectedSavings.toLocaleString()}`
            }
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Pain Points:*\n${leadData.painPoints.map((p: string) => `• ${p}`).join('\n')}`
            }
          },
          {
            type: 'actions',
            elements: [
              {
                type: 'button',
                text: { type: 'plain_text', text: 'Email Lead' },
                url: `mailto:${leadData.email}`
              },
              {
                type: 'button',
                text: { type: 'plain_text', text: 'View Full Assessment' },
                url: `https://backupestate.vercel.app/admin/leads/${leadData.email}`
              }
            ]
          }
        ]
      })
    });
  } catch (error) {
    console.error('Slack notification failed:', error);
  }
}

function generateEmailHTML(results: any, leadData: any): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Sovereign Estate Roadmap</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a; color: #ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #1e293b;">
    <!-- Header -->
    <tr>
      <td style="padding: 40px 30px; text-align: center; background: linear-gradient(to bottom, #1e40af, #0f172a);">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #ffffff;">
          Your Sovereign Estate Profile
        </h1>
        <p style="margin: 10px 0 0; font-size: 16px; color: #94a3b8;">
          Assessment Results & Custom Roadmap
        </p>
      </td>
    </tr>

    <!-- Risk Badge -->
    <tr>
      <td style="padding: 30px 30px 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="display: inline-block; padding: 8px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; background-color: ${
            results.riskLevel === 'CRITICAL' ? '#7f1d1d' : 
            results.riskLevel === 'HIGH' ? '#78350f' : '#1e3a8a'
          }; color: ${
            results.riskLevel === 'CRITICAL' ? '#fca5a5' : 
            results.riskLevel === 'HIGH' ? '#fbbf24' : '#60a5fa'
          }; border: 2px solid ${
            results.riskLevel === 'CRITICAL' ? '#dc2626' : 
            results.riskLevel === 'HIGH' ? '#f59e0b' : '#3b82f6'
          };">
            ⚠️ THREAT LEVEL: ${results.riskLevel}
          </span>
        </div>
        <p style="font-size: 18px; line-height: 1.6; color: #cbd5e1; text-align: center;">
          Based on your responses, you're a strong fit for our 
          <strong style="color: #34d399;">${results.tierLabel}</strong> engagement
        </p>
      </td>
    </tr>

    <!-- Key Metrics -->
    <tr>
      <td style="padding: 20px 30px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="33%" style="padding: 15px; text-align: center; background-color: #334155; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #34d399; margin-bottom: 5px;">
                ${results.investmentRange}
              </div>
              <div style="font-size: 12px; color: #94a3b8;">
                Recommended Investment
              </div>
            </td>
            <td width="5%"></td>
            <td width="33%" style="padding: 15px; text-align: center; background-color: #334155; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #60a5fa; margin-bottom: 5px;">
                $${Math.round(results.projectedSavings / 1000)}k
              </div>
              <div style="font-size: 12px; color: #94a3b8;">
                5-Year Savings
              </div>
            </td>
            <td width="5%"></td>
            <td width="33%" style="padding: 15px; text-align: center; background-color: #334155; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #fbbf24; margin-bottom: 5px;">
                ${results.paybackPeriod}
              </div>
              <div style="font-size: 12px; color: #94a3b8;">
                ROI Payback
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Vulnerabilities -->
    <tr>
      <td style="padding: 20px 30px;">
        <div style="background-color: #7f1d1d; border: 2px solid #dc2626; border-radius: 12px; padding: 20px;">
          <h2 style="margin: 0 0 15px; font-size: 20px; color: #fca5a5;">
            ⚠️ Critical Vulnerabilities Detected
          </h2>
          <ul style="margin: 0; padding-left: 20px; color: #fecaca;">
            ${results.painPoints.map((point: string) => `<li style="margin-bottom: 8px;">${point}</li>`).join('')}
          </ul>
        </div>
      </td>
    </tr>

    <!-- CTA -->
    <tr>
      <td style="padding: 30px; text-align: center;">
        <a href="https://calendly.com/defcon5ready/30min" style="display: inline-block; padding: 16px 32px; background: linear-gradient(to right, #34d399, #3b82f6); color: #0f172a; font-weight: bold; font-size: 16px; text-decoration: none; border-radius: 12px;">
          ${results.urgency === 'critical' ? '🚨 Schedule Emergency Consultation' : 'Book 30-Min Strategy Call'}
        </a>
        <p style="margin: 15px 0 0; font-size: 14px; color: #94a3b8;">
          Or reply to this email to discuss your specific requirements
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 30px; text-align: center; background-color: #0f172a; border-top: 1px solid #334155;">
        <p style="margin: 0; font-size: 12px; color: #64748b;">
          Digital Estate Architect | Chicago, IL<br>
          <a href="mailto:defcon5ready@gmail.com" style="color: #3b82f6; text-decoration: none;">defcon5ready@gmail.com</a> | 
          <a href="tel:+17739200030" style="color: #3b82f6; text-decoration: none;">+1 (773) 920-0030</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
