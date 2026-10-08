import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { firstName, lastName, phone, email, service, message } = body;

    if (!firstName || !phone || !email) {
      return NextResponse.json(
        { error: "First name, phone number, and email are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const fullName = `${firstName} ${lastName || ""}`.trim();

    const serviceLabels: Record<string, string> = {
      "ac-repair": "Air Conditioning Repair or Diagnostic",
      "ac-install": "New AC Unit Installation / Replacement",
      "heating-repair": "Heating & Furnace Repair",
      "heating-install": "Furnace / Heat Pump Installation",
      "maintenance": "Seasonal Maintenance & Tune-Up",
      "air-quality": "Indoor Air Quality / Duct Cleaning",
      "emergency": "24/7 Emergency Service",
    };

    const serviceDisplay = serviceLabels[service] || service || "Not specified";

    const emailSubject = `New HVAC Quote Request: ${fullName} (${serviceDisplay})`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #006397; margin-top: 0;">New Quote / Contact Request</h2>
        <p style="color: #475569; font-size: 14px;">A new inquiry has been submitted through the Jim Cooling & Heating website contact form.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #128dd1;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #128dd1;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Service Needed:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${serviceDisplay}</td>
          </tr>
        </table>

        ${
          message
            ? `
            <div style="margin-top: 20px; padding: 14px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #006397;">
              <strong style="color: #334155; display: block; margin-bottom: 6px;">Project Details / Symptoms:</strong>
              <p style="color: #1e293b; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            `
            : ""
        }

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 16px;" />
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Sent automatically via Jim Cooling & Heating Contact Form.</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Jim Cooling & Heating <notifications@indevasa.com>",
      to: ["hvac@jimcoolingandheating.com"],
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact API route exception:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
