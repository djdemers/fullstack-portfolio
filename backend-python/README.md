## `backend-python/` – FastAPI Backend

This is the **Python backend** for the fullstack portfolio project, built with **FastAPI**. It provides API endpoints 
(currently for the contact form) and stores data in a **MySQL database**.

---

## ⚙️ Quick Start Guide 

### 1. **Activate Virtual Environment**

If not already created:
```bash
python -m venv venv
```

To activate (Windows):
```bash
source venv/Scripts/activate
```

To exit:
```bash
deactivate
```

---

### 2. **Install Dependencies**

```bash
pip install -r requirements.txt
```

Don’t have a `requirements.txt` yet?

```bash
pip install fastapi uvicorn sqlalchemy pymysql python-dotenv
pip freeze > requirements.txt
```

---

### 3. **Set Environment Variables**

Create a `.env` file in `backend-python/`:

```ini
# .env
MYSQL_USER=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB=contact_db
```

Make sure the MySQL server is **running** and the database `contact_db` exists.

---

### 4. **Run the Server**

Start FastAPI (with hot-reload):
```bash
uvicorn app.main:app --reload
```

⚠️ **If port issues / server conflict:**  
List uvicorn processes:
```bash
ps -ef | grep uvicorn
```

Kill by PID:
```bash
kill -9 <PID>
```

---

### 5. **Verify the Server is Running**

- Backend API root: [http://localhost:8000](http://localhost:8000)
- Swagger Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

> Check the **contact form route** is listed under “Contact” and shows:  
`POST /contact/`

---

## How to Test Contact API

### POST `/contact/`

Submit JSON:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "message": "Hello!"
}
```

Via `curl`:
```bash
curl -X POST http://127.0.0.1:8000/contact/ \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

✅ **Verify**: Should return success message and store in MySQL.

---

## Project Structure

```plaintext
backend-python/
│── app/
│   ├── config/         # DB setup (SQLAlchemy)
│   │   └── db.py
│   ├── models/         # Pydantic + SQLAlchemy models
│   │   └── contact.py
│   ├── routes/         # API endpoints
│   │   └── contact.py
│   └── __init__.py
│── main.py             # FastAPI app entry
│── .env                # Env vars (not in Git)
│── requirements.txt    # Dependencies
│── venv/               # Virtualenv
```

---

## Development Notes

- Run this backend **when developing frontend** contact form.
- Test with **curl**, **Postman**, or directly in **Swagger UI**.
- Always verify **MySQL** is running before submitting data.

---

## Next Steps

- Integrate **email notifications** (send form submission to inbox).
- Add more endpoints (projects, resume, skills, etc.).
- Add **unit tests** (`pytest`).
- Deploy backend (e.g., Render, Railway).

