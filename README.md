# HelloWorldApp

## Description
A simple Node.js app that fetches data from an external API, stores it in a PostgreSQL database, and displays the stored data via API endpoints.

---

## Setup

### 1. 📂 Clone the Repository
```bash
git clone git@github.com:AyeKhantKhantPo/HelloWorldApp.git
cd HelloWorldApp
```

### 2. 📦 Install Dependencies
```bash
npm install
```
### 3. ⚙️ Configure Environment Variables
Create a `.env` file in the project root with the following content:
```env
PORT=4000
DB_USER=<your-postgresql-username>
DB_HOST=localhost
DB_NAME=<your-database-name>
DB_PASSWORD=<your-postgresql-password>
DB_PORT=5432
```

### 4. 🗄️ Create Database and Table
Connect to your PostgreSQL instance and create the posts table:
```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    userId INTEGER,
    title TEXT,
    body TEXT
);

```

### 5. 🚀 Start the Server
```bash
npm start
```
The server will run at http://localhost:4000.

---
## API Endpoints
### Fetch and Store Data
- 🔄 GET `/api/posts/fetch-and-store`
- Fetches data from the external API and stores it in the database.
- Example:
```bash
curl -X GET http://localhost:4000/api/posts/fetch-and-store
```
### Display Stored Data
- 📋 GET `/api/posts/display`
- Retrieves and displays data from the database.
- Example:
```bash
curl -X GET http://localhost:4000/api/posts/display
```
