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
        Service(
            name="Hair Artistry",
            description="Transform your look with expert cutting, styling and coloring. Our master stylists craft looks that complement your unique features and lifestyle.",
            price=85,
            duration=60
        ),
        Service(
            name="Skin Rituals",
            description="Rejuvenate your skin with luxurious facial treatments using premium botanicals. Restore radiance and reveal your most luminous complexion.",
            price=120,
            duration=75
        ),
        Service(
            name="Nail Studio",
            description="Indulge in artistic nail care from classic manicures to elaborate nail art. Each treatment is a ritual of precision and creativity.",
            price=55,
            duration=45
        ),
        Service(
            name="Soul & Wellness",
            description="Restore your inner balance with holistic wellness treatments. Our therapeutic massages and aromatherapy rituals melt away stress and tension.",
            price=150,
            duration=90
        ),
    ]
    db.add_all(services)
    db.commit()
    return {"message": "Seeded services successfully!"}