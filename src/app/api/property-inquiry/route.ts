// POST handler for property inquiry forms on individual listing pages.
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // TODO: Create qualified lead in CRM, notify assigned advisor, send confirmation email
    console.log("[property-inquiry]", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
