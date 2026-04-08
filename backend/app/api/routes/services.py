from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.crud.service import get_services
from app.schemas.service import ServiceResponse
from typing import List

router = APIRouter(prefix="/services", tags=["Services"])

@router.get("/", response_model=List[ServiceResponse])
def list_services(db: Session = Depends(get_db)):
    return get_services(db)