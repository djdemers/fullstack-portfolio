from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.contact import ContactForm, Contact
from app.config.db import SessionLocal

router = APIRouter(prefix="/contact", tags=["Contact"])  # use the router prefix

print("🐍 app/routes/contact.py loaded")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
async def submit_contact_form(contact: ContactForm, db: Session = Depends(get_db)):
    print("🚨 Contact form hit!")
    print(f"📨 Received contact form: {contact}")
    db_contact = Contact(name=contact.name, email=contact.email, message=contact.message)
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)

    return {
        "message": "Contact form submitted successfully!",
        "data": contact
    }

