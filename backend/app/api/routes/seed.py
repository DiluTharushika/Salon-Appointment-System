from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.service import Service

router = APIRouter(prefix="/seed", tags=["Seed"])

@router.post("/services")
def seed_services(db: Session = Depends(get_db)):
    existing = db.query(Service).count()
    if existing > 0:
        return {"message": "Services already exist"}

    services = [
        Service(name="Hair Artistry", description="Cut, wash, styling.", price=40, duration=45),
        Service(name="Skin Rituals", description="Glow facial treatment.", price=60, duration=60),
        Service(name="Nail Studio", description="Manicure & cleanup.", price=25, duration=30),
        Service(name="Soul & Wellness", description="Relaxing spa ritual.", price=70, duration=75),
    ]
    db.add_all(services)
    db.commit()
    return {"message": "Seeded services"}