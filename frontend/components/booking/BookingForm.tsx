"use client";

import { useState } from "react";

const services = [
  { id: 1, name: "Women’s Haircut" },
  { id: 2, name: "Men’s Haircut" },
  { id: 3, name: "Hair Color" },
];

export function BookingForm() {
  const [serviceId, setServiceId] = useState<number | "">("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Booking submitted (demo). Next step: connect to backend.");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="space-y-1">
        <label className="text-xs text-gray-600">Service</label>
        <select
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value ? Number(e.target.value) : "")}
          required
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs text-gray-600">Date</label>
          <input
            type="date"
            className="w-full rounded-xl border px-3 py-2 text-sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-gray-600">Time</label>
          <input
            type="time"
            className="w-full rounded-xl border px-3 py-2 text-sm"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-gray-600">Your name</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-gray-600">Phone number</label>
        <input
          className="w-full rounded-xl border px-3 py-2 text-sm"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="07X-XXXXXXX"
          required
        />
      </div>

      <button className="w-full rounded-full bg-rose-700 py-2 text-sm font-medium text-white hover:bg-rose-800">
        Submit booking
      </button>

      {message && <p className="text-xs text-gray-600">{message}</p>}
    </form>
  );
}