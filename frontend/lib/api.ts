import { API_BASE_URL } from "./config";
import type { Service, BookingCreate } from "./types";

export async function getServices(): Promise<Service[]> {
  const res = await fetch(`${API_BASE_URL}/services/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function createBooking(payload: BookingCreate) {
  const res = await fetch(`${API_BASE_URL}/bookings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to create booking");
  return res.json();
}