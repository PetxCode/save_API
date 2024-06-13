import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    message: "This the Get API",
  });
};

export const POST = () => {
  return NextResponse.json({
    message: "This the POST API",
  });
};

export const PATCH = () => {
  return NextResponse.json({
    message: "This the PATCH API",
  });
};
