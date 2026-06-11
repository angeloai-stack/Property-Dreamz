import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // TODO: Send to CRM (HubSpot / Salesforce) and trigger confirmation email via Resend
    console.log("[contact]", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
