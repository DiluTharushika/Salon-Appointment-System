from pydantic import BaseModel, field_validator
from datetime import date, time
from typing import Optional, Any

class BookingCreate(BaseModel):
    service_id: int
    customer_name: str
    phone_number: str
    booking_date: date
    booking_time: str
    notes: Optional[str] = None

class BookingResponse(BaseModel):
    id: int
    service_id: int
    customer_name: str
    phone_number: str
    booking_date: date
    booking_time: Any
    notes: Optional[str] = None
    status: str

    @field_validator('booking_time', mode='before')
    @classmethod
    def convert_time(cls, v):
        if isinstance(v, time):
            return v.strftime('%H:%M:%S')
        return str(v)

    class Config:
        from_attributes = True