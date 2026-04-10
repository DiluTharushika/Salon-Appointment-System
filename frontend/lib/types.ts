export type Service = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  duration: number;
};

export type BookingCreate = {
  service_id: number;
  customer_name: string;
  phone_number: string;
  booking_date: string;   // "2026-04-08"
  booking_time: string;   // "14:30:00"
  notes?: string;
};