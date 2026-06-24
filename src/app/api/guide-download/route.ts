// POST handler for buyer's guide download form — captures lead email before sending PDF.
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // TODO: Add to email list, send PDF guide via Resend/Mailchimp
    console.log("[guide-download]", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
