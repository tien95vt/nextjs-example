import { NextResponse } from 'next/server';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';

export async function GET() {
  const { accessToken } = await getAccessToken();
  const session = await getSession();
  return NextResponse.json({
    foo: 'bar',
    acc: accessToken,
    ssAc: session?.accessToken,
    ssRf: session?.refreshToken,
    test: 123
  });
}