from sqlalchemy import Column, Integer, String, Date, Time, Text
from app.db.database import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    service_id = Column(Integer, nullable=False)
    customer_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    booking_date = Column(Date, nullable=False)
    booking_time = Column(Time, nullable=False)
    notes = Column(Text, nullable=True)
    status = Column(String, default="pending")