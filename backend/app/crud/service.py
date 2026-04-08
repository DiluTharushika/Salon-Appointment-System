from sqlalchemy.orm import Sessuion
from app.models.service import Service

def get_services(db:Session):
    return db.query(Service).all()