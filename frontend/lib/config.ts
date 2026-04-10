// frontend/lib/config.ts
export const API_BASE_URL =
  typeof window === "undefined"
    ? // Server-side (inside Docker container)
      process.env.NEXT_PUBLIC_SERVER_API_BASE_URL || "http://backend:8000"
    : // Client-side (browser)
      process.env.NEXT_PUBLIC_BROWSER_API_BASE_URL || "http://localhost:8000";