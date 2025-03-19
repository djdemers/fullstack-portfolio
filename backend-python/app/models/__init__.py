# routes/__init__.py
# Initialize the routes module

# Optional: Create a routes function that adds routes to the app
def routes(app):
    """
    A function to add all the routes to the FastAPI app.
    This can be useful if you want to encapsulate adding routes in one place.
    """
    from app.routes.example import router as example_router
    app.include_router(example_router)



