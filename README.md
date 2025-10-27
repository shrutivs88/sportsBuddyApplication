## 🚀 Technologies Used

### ⚛ Frontend
- **React.js**
- **React Router DOM**
- **HTML**
- **CSS**
- **Vite.js**

### ☁ Backend & Database
- **Firebase**
  - 🧾 **Authentication**
  - 🔥 **Firestore Database**
  - ⚙️ (config via `.env.local`)

---

## ⚙️ Setup & Installation

### ✅ Prerequisites

- Node.js (LTS)
- npm or Yarn

---

### 🧩 1. Clone the Repository

```
    git clone https://github.com/Mr-aj33t/Sports_Buddy_App.git
    cd Sports_Buddy_App
```


---

### 📦 2. Install Dependencies

```
    npm install
    OR
    yarn install
```


---

### 🔐 3. Firebase Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project and web app
3. Copy your config object:

```
    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
    };
```


4. Create a file called `.env.local` in the root of your project and paste your config like:

```
    REACT_APP_FIREBASE_API_KEY="YOUR_API_KEY"
    REACT_APP_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    REACT_APP_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    REACT_APP_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    REACT_APP_FIREBASE_APP_ID="YOUR_APP_ID"
```

5. 🧯 Enable Firestore & Email/Password Auth in your Firebase console

---

### ▶️ 4. Run the App Locally

```
    npm run dev
    OR
    yarn dev
```


Then open: http://localhost:5173/

---

## 🗂️ Project Structure

```
        Sports_Buddy_App/
    ├── public/
    │ ├── assets/
    │ └── index.html
    ├── src/
    │ ├── components/
    │ ├── firebase/
    │ ├── pages/
    │ ├── App.jsx
    │ ├── App.css
    │ └── main.jsx
    ├── .env.local
    ├── .gitignore
    ├── vite.config.js
    ├── package.json
    └── README.md
```



