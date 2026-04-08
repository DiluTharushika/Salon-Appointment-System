from pydantic import BaseModel
from datetime import date, time

class BookingCreate(BaseModel):
    user_id: int
    service_id: int
    booking_date: date
    booking_time: time

class BookingResponse(BaseModel):
    id: int
    user_id: int
    service_id: int
    booking_date: date
    booking_time: time
    status: str

    class Config:
        from_attributes = True