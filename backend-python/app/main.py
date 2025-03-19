# app/main.py

from fastapi import FastAPI
from .routes.contact import router as contact_router
from .config.db import Base, engine

app = FastAPI()

# Include routers
app.include_router(contact_router)

@app.on_event("startup")
def on_startup():
    # Create tables
    Base.metadata.create_all(bind=engine)

@app.get("/")
async def root():
    return {"message": "Welcome to my FastAPI backend!"}
