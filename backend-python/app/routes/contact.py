# contact.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()

# Define the structure of incoming contact data
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

# POST /contact endpoint
@router.post("/contact")
async def submit_contact_form(form: ContactForm):
    # Print/log for now – replace with DB or email later
    print("Received contact form:", form.model_dump())

    # Simulate success response
    return {"message": "Contact form submitted successfully!"}
