from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.db.database import get_db
from app.schemas.booking import BookingCreate, BookingResponse
from app.crud.booking import create_booking, get_bookings

router=APIRouter(prefix="/bookings", tags=["Bookings"])

@router.post("/", response_model=BookingResponse)
def create_new_booking(booking:BookingCreate, db:Session=Depends(get_db)):
    return create_booking(db,booking)

@router.get("/", response_model=List[BookingResponse])
def list_bookings(db:Session=Depends(get_db)):
    return get_bookings(db)