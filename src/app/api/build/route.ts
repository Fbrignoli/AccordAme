export const runtime = "nodejs";

export function GET() {
  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.NEXT_PUBLIC_GITHUB_SHA ||
    "dev";

  return Response.json({
    sha,
    buildTime: process.env.VERCEL_BUILD_TIME || process.env.NEXT_PUBLIC_VERCEL_BUILD_TIME || null,
    nodeEnv: process.env.NODE_ENV || null,
  });
}


