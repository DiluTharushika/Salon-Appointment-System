from pydantic import BaseModel

class ServiceCreate(BaseModel):
    name: str
    description: str
    price: float
    duration: int
class ServiceResponse(BaseModel):
    id: int
    name: str
    description: str|None=None
    price: float
    duration: int

    
    class Config:
        from_attributes = True