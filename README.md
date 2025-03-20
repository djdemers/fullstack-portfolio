
---

# **Fullstack Portfolio 🚀**
A full-stack portfolio showcasing my expertise in **React (JavaScript frontend), Spring Boot (Java backend), and Flask (Python backend).**
https://djdemers.github.io/fullstack-portfolio/

---

## **📂 Project Structure**
```plaintext
fullstack-portfolio/
│── backend-java/          # Java backend (Spring Boot API)
│   ├── src/main/java/com/yourname/backend/   # Java API logic
│   ├── pom.xml            # Maven dependencies (or build.gradle if using Gradle)
│── backend-python/        # Python backend (Flask API)
│   ├── main.py            # API logic
│   ├── requirements.txt   # Python dependencies
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
- **Python** (for Flask backend) → [Download](https://www.python.org/)

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

## **🔹 Backend: Java (Spring Boot)**
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

## **🔹 Backend: Python (Flask)**
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
   python main.py
   ```
5. **API will be available at:**  
   🔗 [http://localhost:5000](http://localhost:5000)

---

## **🔗 Connecting Frontend to Backends**
To make API calls from React:
- **For Java API (Spring Boot)** → Fetch data from `http://localhost:8080/`
- **For Python API (Flask)** → Fetch data from `http://localhost:5000/`

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

✅ **Backend (Python + Flask)**
- Lightweight API
- Easy to extend

---

## **📌 Next Steps**
🔲 **Customize the React homepage** (Replace default UI with "About Me")  
🔲 **Set up React Router** (Add pages for Projects, Resume, and Contact)  
🔲 **Connect frontend with backend APIs**

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
- 🔗 [LinkedIn Profile](www.linkedin.com/in/david-joseph-de-mers)
- 🌎 [Portfolio Website](https://github.com/djdemers/djdemers.git)

---

## **📜 License**
This project is open-source and available under the **MIT License**.

---

### **🔥 Summary of Changes**
