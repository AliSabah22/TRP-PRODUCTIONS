import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, unknown> = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value as string;
      });
    }

    return NextResponse.json({ ok: true, received: data });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Failed to submit' }, { status: 400 });
  }
} 