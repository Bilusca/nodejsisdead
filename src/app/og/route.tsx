import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        tw="flex flex-col gap-4 w-full h-full items-center justify-center bg-slate-900 font-extrabold text-center text-6xl text-white"
      >
        <span>Check if <span tw="text-emerald-700 mx-4">Node.JS</span></span>
        <span>is dead 🪦</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji'
    },
  );
}