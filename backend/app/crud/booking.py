from sqlalchemy.orm import Session
from app.models.booking import Booking
from app.schemas.booking import BookingCreate

def create_booking(db: Session, booking: BookingCreate):
    db_booking = Booking(
        service_id=booking.service_id,
        customer_name=booking.customer_name,
        phone_number=booking.phone_number,
        booking_date=booking.booking_date,
        booking_time=booking.booking_time,
        notes=booking.notes,
        status="pending"
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

def get_bookings(db: Session):
    return db.query(Booking).all()