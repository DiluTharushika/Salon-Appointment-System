export type Service = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  duration: number;
};

export type BookingCreate = {
  user_id: number;        // later you can get from auth
  service_id: number;
  booking_date: string;   // "2026-04-08"
  booking_time: string;   // "14:30:00"
};