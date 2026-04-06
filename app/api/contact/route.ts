import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from: "BreizhApp <onboarding@resend.dev>",
      to: "mathieu.wreizh@gmail.com",
      replyTo: email,
      subject: `Nouveau contact BreizhApp — ${name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; background: #FFFBF0; border: 3px solid #0A0A0A;">
          <div style="background: #FFE234; padding: 16px; border: 3px solid #0A0A0A; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 20px;">📱 Nouveau contact BreizhApp</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff; font-weight: bold; width: 30%;">Nom</td>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff;">
                <a href="mailto:${email}" style="color: #7C3AED;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff; font-weight: bold;">Type de projet</td>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff;">${budget || "Non précisé"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px; border: 2px solid #0A0A0A; background: #fff; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 12px; background: #0A0A0A; color: #FFE234; text-align: center; font-weight: bold;">
            Réponds directement à cet email pour contacter ${name}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
