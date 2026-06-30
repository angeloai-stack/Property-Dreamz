import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_PAGE_FORM_URL;
  if (!webhookUrl) {
    console.error("[property-inquiry] WEBHOOK_PAGE_FORM_URL is not set");
    return NextResponse.json({ success: false }, { status: 500 });
  }
  try {
    const body = await req.json();
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, source: "property-inquiry", submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) {
      console.error("[property-inquiry] Webhook responded with", res.status);
      return NextResponse.json({ success: false }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[property-inquiry]", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
