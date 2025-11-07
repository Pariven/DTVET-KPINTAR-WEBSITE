import { getAppUrl } from "@/lib/stripe/client";

export async function GET() {
  const url = getAppUrl();
  console.log("🧪 Test getAppUrl result:", url);
  console.log("🌍 Environment variables:", {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  });
  
  return Response.json({ 
    url, 
    env: {
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NODE_ENV: process.env.NODE_ENV,
    }
  });
}