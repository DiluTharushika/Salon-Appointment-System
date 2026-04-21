"use client";

import { useState } from "react";
import { createBooking } from "@/lib/api";

type ServiceOption = { id: number; name: string };

const demoServices: ServiceOption[] = [
  { id: 1, name: "Hair Artistry" },
  { id: 2, name: "Skin Rituals" },
  { id: 3, name: "Nail Studio" },
  { id: 4, name: "Soul & Wellness" },
];

export function BookingForm() {
  const [serviceId, setServiceId] = useState<number | "">("");
  const [date, setDate]           = useState("");
  const [time, setTime]           = useState("");
  const [fullName, setFullName]   = useState("");
  const [phone, setPhone]         = useState("");
  const [notes, setNotes]         = useState("");
  const [loading, setLoading]     = useState(false);
  const [message, setMessage]     = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    setIsSuccess(false);

    try {
      const booking_time = time.length === 5 ? `${time}:00` : time;
      await createBooking({
        service_id:    Number(serviceId),
        customer_name: fullName,
        phone_number:  phone,
        booking_date:  date,
        booking_time,
        notes:         notes || undefined,
      });
      setIsSuccess(true);
      setMessage("Your appointment has been reserved beautifully.");
      setServiceId(""); setDate(""); setTime("");
      setFullName(""); setPhone(""); setNotes("");
    } catch (err: any) {
      setIsSuccess(false);
      setMessage(`Unable to confirm booking: ${String(err?.message ?? err)}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="animate-scale-in space-y-6 rounded-3xl p-8 sm:p-10"
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        backdropFilter: "blur(24px) saturate(1.4)",
        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Form title inside card */}
      <div className="mb-8">
        <div className="divider-gold mb-6" />
        <p
          className="text-[9px] uppercase tracking-[0.45em] font-semibold"
          style={{ color: "var(--gold)" }}
        >
          Step 1 of 1
        </p>
        <h2
          className="mt-2 font-serif text-2xl"
          style={{ color: "var(--ink)" }}
        >
          Your Details
        </h2>
      </div>

      {/* Service */}
      <div className="space-y-2">
        <label className="field-label">Service</label>
        <div className="relative">
          <select
            className="field appearance-none pr-10"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value ? Number(e.target.value) : "")}
            required
          >
            <option value="">Select a service…</option>
            {demoServices.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          {/* custom chevron */}
          <div
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs"
            style={{ color: "var(--muted)" }}
          >
            ▾
          </div>
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="field-label">Date</label>
          <input
            type="date"
            className="field"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="field-label">Time</label>
          <input
            type="time"
            className="field"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label className="field-label">Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
          className="field"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="field-label">Phone Number</label>
        <input
          type="tel"
          placeholder="+1 (000) 000-0000"
          className="field"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <label className="field-label">Special Notes <span style={{ color: "var(--gold-dim)", fontWeight: 400 }}>(optional)</span></label>
        <textarea
          placeholder="Any preferences, allergies, or requests…"
          className="field min-h-[100px] resize-none"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Divider */}
      <div className="divider-gold" />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-[11px] py-4 transition-opacity"
        style={{ opacity: loading ? 0.65 : 1 }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            Confirming…
          </span>
        ) : (
          "Confirm Appointment"
        )}
      </button>

      {/* Feedback */}
      {message && (
        <div
          className="rounded-2xl px-5 py-4 text-sm flex items-start gap-3 animate-fade-up"
          style={{
            background: isSuccess
              ? "rgba(201,169,110,0.10)"
              : "rgba(220,60,60,0.08)",
            border: `1px solid ${isSuccess ? "rgba(201,169,110,0.30)" : "rgba(220,60,60,0.20)"}`,
            color: isSuccess ? "var(--gold-dim)" : "#c0392b",
          }}
        >
          <span className="text-base mt-0.5">{isSuccess ? "✦" : "⚠"}</span>
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}