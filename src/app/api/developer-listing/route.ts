// POST handler for developer listing applications — stubs until CRM and email are wired.
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // TODO: Create developer lead in CRM, notify sales team, send confirmation email
    console.log("[developer-listing]", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
