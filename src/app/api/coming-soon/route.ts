// POST handler for the coming-soon waitlist form — forwards leads to a webhook immediately.
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_COMING_SOON_URL;
  if (!webhookUrl) {
    console.error("[coming-soon] WEBHOOK_COMING_SOON_URL is not set");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    const body = await req.json();

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name ?? "",
        email: body.email ?? "",
        phone: body.phone ?? "",
        source: "coming_soon",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("[coming-soon] Webhook responded with", res.status);
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[coming-soon]", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
