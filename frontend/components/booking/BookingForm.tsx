"use client";

import { useState } from "react";

type ServiceOption = { id: number; name: string };

const demoServices: ServiceOption[] = [
  { id: 1, name: "Hair Artistry" },
  { id: 2, name: "Skin Rituals" },
  { id: 3, name: "Nail Studio" },
  { id: 4, name: "Soul & Wellness" },
];

export function BookingForm() {
  const [serviceId, setServiceId] = useState<number | "">("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Booking submitted (demo). Next: connect to backend.");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
    >
      <div className="space-y-1">
        <label className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
          Service
        </label>
        <select
          className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#9C4A5E]/30"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value ? Number(e.target.value) : "")}
          required
        >
          <option value="">Select a service</option>
          {demoServices.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
            Date
          </label>
          <input
            type="date"
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#9C4A5E]/30"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
            Time
          </label>
          <input
            type="time"
            className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#9C4A5E]/30"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
          Full name
        </label>
        <input
          className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#9C4A5E]/30"
          placeholder="Your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
          Phone number
        </label>
        <input
          className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#9C4A5E]/30"
          placeholder="07X-XXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
          Notes (optional)
        </label>
        <textarea
          className="min-h-[90px] w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#9C4A5E]/30"
          placeholder="Any preferences?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <button className="w-full rounded-full bg-[#9C4A5E] px-6 py-3 text-sm font-medium text-white hover:bg-[#8a3f52]">
        Submit booking
      </button>

      {message && <p className="text-sm text-[#7C6660]">{message}</p>}
    </form>
  );
}