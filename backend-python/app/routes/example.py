# routes/example.py

from fastapi import APIRouter

# Create a router instance for modular endpoints
router = APIRouter()

# Define a simple GET route at /hello
@router.get("/hello")
async def say_hello():
    """
    A sample endpoint that returns a JSON greeting.
    Access this at: http://127.0.0.1:8000/hello
    """
    return {"message": "Hello from FastAPI!"}
