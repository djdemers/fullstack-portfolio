## `backend-python/` – FastAPI Backend

This is the **Python backend** for the fullstack portfolio project, built with **FastAPI**. It currently provides a  
---

### **Set Up Virtual Environment**

If not already created:
```bash
python -m venv venv
source venv/Scripts/activate    # Windows
deactivate # exit venv
 
```

---

### **Install Dependencies**

```bash
pip install -r requirements.txt
```

If you don't have a `requirements.txt` yet:
```bash
pip install fastapi uvicorn sqlalchemy pymysql python-dotenv
pip freeze > requirements.txt
```

---

### **Configure Environment Variables**

Create a `.env` file in `backend-python/`:

```ini
# .env
MYSQL_USER=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB=contact_db
```

---

## Project Structure (Python Backend)
```plaintext
backend-python/
│── app/
│   ├── config/           # DB setup and config
│   │   └── db.py
│   ├── models/           # Pydantic & SQLAlchemy models
│   │   └── contact.py
│   ├── routes/           # API endpoints
│   │   └── contact.py
│   └── __init__.py
│── main.py               # FastAPI app entry point
│── .env                  # Environment variables (not tracked by Git)
│── requirements.txt      # Python dependencies
│── venv/                 # Virtual environment
```

---

## How to Run the Server

### Start FastAPI Server (with hot-reload):
```bash
uvicorn app.main:app --reload
```

Server will be available at:  
[http://localhost:8000](http://localhost:8000)

Docs available at:  
[http://localhost:8000/docs](http://localhost:8000/docs)

---

## Current API: Contact Form

### POST `/contact`

Submit contact form data (name, email, message) — currently stores in MySQL database.

#### Example Request (JSON):
```json
{
  "name": "xxx",
  "email": "xxx@example.com",
  "message": "Hello!."
}
```

#### Example Response:
```json
{
  "message": "Contact form submitted successfully!",
  "data": {
    "name": "xxx",
    "email": "xxx@example.com",
    "message": "Hello!"
  }
}
```

---

## Development Notes

- **Run this backend** when developing or testing the frontend contact form.
- Use **Postman** or **curl** to manually test the API.
- Make sure **MySQL is running**, and the database specified in `.env` exists.

---

## Next Steps

- Email integration (send contact form to your inbox).
- More endpoints (projects, experience, etc.)
- Unit testing with `pytest`.
- Deploy backend (Render, Railway, etc.)

