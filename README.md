

### 📦 Project Name: `mimAR-flutter_task-backend`

### 📄 Description:

This is a secure and scalable **Node.js Express backend** designed to support a **Flutter mobile app**. The backend follows the **MVC (Model-View-Controller)** pattern and provides authentication, API integrations, and dynamic content delivery using external APIs.

---

### 🚀 Features:

* ✅ **JWT Authentication**

  * User **Signup** & **Login** endpoints.
  * Secure access to protected routes.
  * Token stored and used via **Postman** or **Flutter app**.


* 🌦️ **Weather API Integration**

  * Fetch current weather data for a given city.

* 💬 **Random Quotes API Integration**

  * Display motivational or inspirational quotes.

* 🤖 **Google Gemini API Integration**

  * AI-generated text responses based on user input (e.g., chatbot or insights).

* 📁 **Modular Structure**

  * Follows the **MVC architecture**:

    * `/config`: Configuration files (e.g., database)
    * `/controllers`: Business logic and request handling
    * `/models`: Database schema definitions (e.g., User, Post)
    * `/middlewares`: Custom middlewares (e.g., auth, validation)
    * `/postman`: Postman collection for testing APIs
    * `/routes`: API route definitions
    * `app.js`: Main application entry point

---

### 🛠️ Tech Stack:

* **Node.js + Express.js**
* **MongoDB + Mongoose** (or another DB)
* **JWT for Auth**
* **External APIs** (Weather, Quotes, Gemini AI)
* **CORS + Body Parser Middleware**

---

### 📂 Folder Structure:

```
mimAR-flutter_task-backend/
├── config/                # Configuration files (e.g., database, API keys)
├── controllers/           # Contains controller logic for routes
├── models/                # Database schema definitions
├── middlewares/           # Custom middlewares (auth, validation, etc.)
├── postman/               # Postman collection for testing
│   └── Flutter App Node_Backend API.postman_collection.json
├── routes/                # API route definitions
├── app.js                 # Main app entry point
├── .env                   # Api keys etc
└── README.md              # Project documentation
```

---

### 📌 How to Run:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mimAR-flutter_task-backend.git
   ```

2. **Install dependencies:**

   ```bash
   cd mimAR-flutter_task-backend
   npm install
   ```

3. **Set up environment variables**:

   * Create a `.env` file and add your environment-specific variables (e.g., JWT\_SECRET, API\_KEYS, DB connection details).

4. **Run the server:**

   ```bash
   npm start
   ```

---


