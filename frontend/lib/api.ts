// frontend/lib/api.ts
import { API_BASE_URL } from "./config";
import type { Service, BookingCreate } from "./types";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
  }
  return res.json() as Promise<T>;
}

export async function getServices(): Promise<Service[]> {
  const res = await fetch(`${API_BASE_URL}/services/`, {
    cache: "no-store",
  });
  return handleResponse<Service[]>(res);
}

export async function createBooking(payload: BookingCreate) {
  const res = await fetch(`${API_BASE_URL}/bookings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
}