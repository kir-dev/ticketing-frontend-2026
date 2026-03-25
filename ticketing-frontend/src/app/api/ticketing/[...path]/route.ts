import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_BASE = "https://ticketing.bujdi.xyz";

async function proxyAll(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const { path } = await params;
    const url = new URL(`${API_BASE}/${path}`);
    url.search = request.nextUrl.search;

    const headers = new Headers(request.headers);
    headers.delete("host");

    const res = await fetch(url.toString(), {
      method: request.method,
      headers,
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
    });

    const text = await res.text();

    if (!res.ok) {
      console.error(`Backend returned status ${res.status} with body:`, text);
      return NextResponse.json(
        {
          error: "Backend error",
          status: res.status,
          body: text,
        },
        { status: 502 }
      );
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error("Proxy exception:", err);
    return NextResponse.json(
      { error: "Proxy exception", message: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest, context: any) {
  return proxyAll(request, context);
}

export async function POST(request: NextRequest, context: any) {
  return proxyAll(request, context);
}

export async function PUT(request: NextRequest, context: any) {
  return proxyAll(request, context);
}

export async function DELETE(request: NextRequest, context: any) {
  return proxyAll(request, context);
}

export async function PATCH(request: NextRequest, context: any) {
  return proxyAll(request, context);
}