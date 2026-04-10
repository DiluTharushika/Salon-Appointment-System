from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import seed
from app.db.database import Base, engine
from app.db import base
from app.api.routes import auth, services, bookings

app = FastAPI(title="Salon Booking API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://frontend:3000",
        "http://0.0.0.0:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(services.router)
app.include_router(bookings.router)
app.include_router(seed.router)

@app.get("/")
def root():
    return {"message": "Salon Booking API is running"}