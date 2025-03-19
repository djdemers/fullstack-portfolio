# app/routes/contact.py

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.contact import ContactForm, Contact
from app.config.db import SessionLocal

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/contact")
async def submit_contact_form(contact: ContactForm, db: Session = Depends(get_db)):
    """
    Handle contact form submission and save to DB.
    """
    db_contact = Contact(name=contact.name, email=contact.email, message=contact.message)
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)

    return {
        "message": "Contact form submitted successfully!",
        "data": contact
    }

