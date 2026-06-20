import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const required = ["name", "email", "phone"];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json(
        { error: `Missing field: ${field}` },
        { status: 400 }
      );
    }
  }

  // This logs the lead to your Vercel deployment logs for now.
  // To actually receive these by email or save them somewhere, see the
  // "NEXT STEPS" section in DEPLOY.md — it walks through adding Resend
  // (for email notifications) or a database (Vercel Postgres / Supabase)
  // in a few lines, once you're ready to wire that up.
  console.log("New lead submission:", {
    ...body,
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
