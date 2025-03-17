
---

# **Fullstack Portfolio 🚀**
A full-stack portfolio showcasing my expertise in **React (JavaScript frontend), Spring Boot (Java backend), and Flask (Python backend).**

---

## **📂 Project Structure**
```plaintext
fullstack-portfolio/
│── backend-java/          # Java backend (Spring Boot API)
│   ├── src/main/java/com/yourname/backend/   # Java API logic
│   ├── pom.xml            # Maven dependencies (or build.gradle if using Gradle)
│
│── backend-python/        # Python backend (FastAPI)
│   ├── app/               # FastAPI application package
│   │   ├── main.py        # FastAPI app entry point
│   │   └── routes/        # API route modules
│   │       ├── __init__.py
│   │       └── example.py # Example route
│   ├── venv/              # Virtual environment (not tracked)
│   ├── requirements.txt   # Python dependencies
│
│── frontend-javascript/   # React frontend (Vite + SWC)
│   ├── node_modules/      # Dependencies (ignored by Git)
│   ├── public/            # Static assets
│   ├── src/               # React components
│   ├── package.json       # Project metadata & dependencies
│   ├── vite.config.js     # Vite configuration
│── .gitignore             # Ignore unnecessary files
│── README.md              # Project documentation
```

---

## **🚀 Getting Started**
### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (for React frontend) → [Download](https://nodejs.org/)
- **Java & Maven** (for Spring Boot backend) → [Download](https://adoptopenjdk.net/)
- **Python 3.10+** (for FastAPI backend) → [Download](https://www.python.org/)

---

## **🔹 Frontend: React (Vite + SWC)**
This is the **React-based frontend**, built with **Vite** for fast performance.

### **📌 Setup**
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend-javascript
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open the app in your browser:**  
   🔗 [http://localhost:5173](http://localhost:5173)

---

## **🔹 Backend: Java (Spring Boot) Coming Soon!**
The **Spring Boot API** provides backend logic and data processing.

### **📌 Setup**
1. **Navigate to the Java backend directory:**
   ```bash
   cd backend-java
   ```
2. **Build and run the server:**
   ```bash
   mvn spring-boot:run
   ```
3. **API will be available at:**  
   🔗 [http://localhost:8080](http://localhost:8080)

---

## **🔹 Backend: Python (FastAPI) In Progress**
The **Flask API** serves additional backend functionalities.

### **📌 Setup**
1. **Navigate to the Python backend directory:**
   ```bash
   cd backend-python
   ```
2. **Create a virtual environment & activate it:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # macOS/Linux
   venv\Scripts\activate  # Windows
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask server:**
   ```bash
   uvicorn app.main:app --reload
   ```
5. **API will be available at:**  
   🔗 [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## **🔗 Connecting Frontend to Backends**
To make API calls from React:
- **For Java API (Spring Boot)** → Fetch data from `http://localhost:8080/`
- **For Python API (FastAPI)** → Fetch data from `http://127.0.0.1:8000`

Example **fetch request in React (`frontend-javascript/src/App.js`)**:
```javascript
fetch('http://localhost:8080/api/hello')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## **🌟 Features**
✅ **Frontend (React + Vite)**
- Fast and optimized
- Responsive UI

✅ **Backend (Java + Spring Boot)**
- RESTful API
- Scalable architecture

✅ **Backend (Python + FastAPI)**
- Fast API handling
- Easy to extend

---

## **📌 Next Steps**
🔲 🔧 Build Contact Form API (FastAPI + Email Service)  
🔲 🔄 Connect frontend forms to FastAPI endpoints  
🔲 💾 **Integrate simple SQLite/Postgres for visitor logs  
🔲 🔒 Add authentication to backend for protected routes  

---

### **🚀 Want to Contribute?**
1. **Fork the repository**
2. **Create a new branch**
3. **Commit changes**
4. **Push to your branch**
5. **Submit a Pull Request**

---

## **👨‍💻 Author**
- **David DeMers**
- 📧 **djdemers@asu.edu**
- 🔗 [LinkedIn Profile](https://linkedin.com/in/david-demers-1222b334a)
- 🌎 [Portfolio Website](https://github.com/djdemers/djdemers.git)

---

## **📜 License**
This project is open-source and available under the **MIT License**.

---

### **🔥 Summary of Changes**
