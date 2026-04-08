from fastapi import FastAPI
from app.db.database import Base, engine
from app.db import base
from app.api.routes import auth,services,bookings

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Salon Booking API")

app.include_router(auth.router)
app.include_router(services.router)
app.include_router(bookings.router)

@app.get("/")
def root():
    return {"message": "Salon Booking API is running"}