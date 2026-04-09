export const API_BASE_URL =
  typeof window === "undefined"
    ? "http://backend:8000"
    : process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";