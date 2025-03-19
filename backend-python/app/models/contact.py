# app/models/contact.py

from pydantic import BaseModel, EmailStr
from sqlalchemy import Column, Integer, String
from app.config.db import Base

# Pydantic schema
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

# SQLAlchemy model for DB
class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    message = Column(String(1000), nullable=False)
