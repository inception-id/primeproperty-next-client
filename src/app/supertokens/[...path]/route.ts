import { initializeSupertokens } from "@/lib/supertokens/initialize-supertokens";
import { NextRequest } from "next/server";
import { getAppDirRequestHandler } from "supertokens-node/nextjs";

initializeSupertokens();

const handleCall = getAppDirRequestHandler();

export async function GET(request: NextRequest) {
  const res = await handleCall(request);
  return res;
}

export async function POST(request: NextRequest) {
  return handleCall(request);
}

export async function DELETE(request: NextRequest) {
  return handleCall(request);
}

export async function PUT(request: NextRequest) {
  return handleCall(request);
}

export async function PATCH(request: NextRequest) {
  return handleCall(request);
}

export async function HEAD(request: NextRequest) {
  return handleCall(request);
}
