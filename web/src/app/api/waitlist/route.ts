import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  email: z.string().email(),
  locale: z.enum(["es", "en"]).default("es"),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const { email, locale } = parsed.data;

  // Without a Resend key configured, accept the signup but log it.
  // This lets the form work in local development without secrets.
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    console.log(`[waitlist] ${email} (${locale}) — Resend not configured`);
    return NextResponse.json({ ok: true, mode: "no-resend" });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.contacts.create({
      email,
      audienceId: RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      // If the contact already exists, that's a success from the user's POV.
      const message = String(error.message || "").toLowerCase();
      if (message.includes("already") || message.includes("exists")) {
        return NextResponse.json({ ok: true, already: true });
      }
      console.error("[waitlist] resend error:", error);
      return NextResponse.json({ error: "resend_failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] exception:", err);
    return NextResponse.json({ error: "exception" }, { status: 500 });
  }
}
