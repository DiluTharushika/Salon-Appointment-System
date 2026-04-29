"use client";

import { useSearchParams } from "next/navigation";

function currencyLKR(x: number) {
  return `LKR ${x.toLocaleString()}`;
}

export default function SelectedStyleSummary() {
  const params = useSearchParams();

  const style = params.get("style");
  const priceStr = params.get("price");
  const faceShape = params.get("faceShape");
  const length = params.get("length");
  const type = params.get("type");
  const goal = params.get("goal");

  const price = priceStr ? Number(priceStr) : null;

  if (!style) return null;

  return (
    <div className="rounded-2xl border p-5 mb-6">
      <h2 className="text-lg font-semibold">Selected Style</h2>

      <div className="mt-2">
        <div className="text-xl font-semibold">{style}</div>
        {price !== null && !Number.isNaN(price) && (
          <div className="mt-1 opacity-80">{currencyLKR(price)}</div>
        )}
      </div>

      <div className="mt-4 text-sm opacity-80">
        <div>Face shape: {faceShape ?? "—"}</div>
        <div>Length: {length ?? "—"}</div>
        <div>Hair type: {type ?? "—"}</div>
        <div>Goal: {goal ?? "—"}</div>
      </div>

      <div className="mt-4 text-sm opacity-70">
        We’ll use this as your reference during consultation.
      </div>
    </div>
  );
}