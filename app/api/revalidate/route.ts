import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function GET(request: NextRequest) {
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const isValid = isValidSignature(
    JSON.stringify(request.body),
    signature!,
    SANITY_WEBHOOK_SECRET!
  );

  if (!isValid) {
    NextResponse.json({
      status: 401,
      success: false,
      message: 'Invalid Signature',
    });
    return;
  }

  try {
    const path = request.nextUrl.searchParams.get('path') || '/';
    console.log(`Revalidating: ${path}`);
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.error();
  }
}
