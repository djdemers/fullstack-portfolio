# app/main.py

from fastapi import FastAPI
from routes.example import router as example_router  # Import the router from example.py

# Create FastAPI app instance
app = FastAPI()

# Include the example router
# All routes defined in example_router are now accessible
app.include_router(example_router)

# Optional root route for base URL
@app.get("/")
async def root():
    """
    Root endpoint that returns a simple welcome message.
    Access at: http://127.0.0.1:8000/
    """
    return {"message": "Welcome to my FastAPI backend!"}
