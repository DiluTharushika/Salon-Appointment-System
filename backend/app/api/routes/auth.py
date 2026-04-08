from fastapi import APIRouter,Depends,HTTPExpection
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.crud.user import get_user_by_email,create_user
from app.schemas.user import UserCreate, UserResponse, UserResponse
from app.core.security import hash_password,verify_password

router=APIRouter(prefix="/auth",tags=["Auth"])

@router.post("/signup",response_model=UserResponse)
def signup(user:UserCreate,db:Session=Depends(get_db)):
    existing_user=get_user_by_email(db,user.email)
    if existing_user:
        raise HTTPExpection(status_code=400,detail="Email already registered")
    return create_user(db,user)

@router.post("/login")
def login(user:UserCreate,db:Session=Depends(get_db)):
    db_user=get_user_by_email(db,user.email)
    if not db_user or not verify_password(user.password,db_user.password):
        raise HTTPExpection(status_code=400,detail="Invalid credentials")
    return {"message":"Login successful"}