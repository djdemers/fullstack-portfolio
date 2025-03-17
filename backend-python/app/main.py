# fullstack-portfolio/backend-python/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend API is running!"}

@app.get("/api/projects")
def get_projects():
    return {"projects": ["Dungeon Crawler", "Memoranda", "NLP Project"]}
