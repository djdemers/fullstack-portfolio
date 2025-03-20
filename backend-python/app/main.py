# app/main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from app.routes.contact import router as contact_router
from app.config.db import Base, engine
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("⚙️ Running startup tasks...")
    Base.metadata.create_all(bind=engine)
    yield
    print("🛑 Shutdown tasks (if needed)...")

app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    print(f"👉 Incoming request: {request.method} {request.url}")
    return await call_next(request)

print("🚀 Including contact_router")
app.include_router(contact_router)

@app.get("/")
async def root():
    return {"message": "Welcome to my FastAPI backend!"}
