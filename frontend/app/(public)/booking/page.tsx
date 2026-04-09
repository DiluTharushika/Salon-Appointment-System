import { BookingForm } from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <header className="space-y-2">
        <div className="text-xs uppercase tracking-[0.25em] text-[#7C6660]">
          Bookings
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-[#201A17]">
          Book an appointment
        </h1>
        <p className="text-sm text-[#7C6660]">
          Choose a service, date and time. We’ll confirm your appointment shortly.
        </p>
      </header>

      <BookingForm />
    </div>
  );
}