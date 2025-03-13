## For me, so I wont go search on how to create server.js for my mongodb



## 🚀 **Setup Guide**

### 1️⃣ **Initialize a Node.js Project**
Run this in your terminal:
```sh
npm init -y
```

### 2️⃣ **Install Required Packages**
```sh
npm install express mongoose dotenv cors
```

---

## 📝 **Create `server.js`**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/mydatabase'; // Change this if needed

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Sample Schema & Model
const UserSchema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model('User', UserSchema);

// Routes
app.get('/', (req, res) => res.send('API is running...'));

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```
---

## ▶ **Run the Server**
Start your server with:
```sh
node server.js
```
Or use `nodemon` (if installed):
```sh
npx nodemon server.js
```

---

// GO TO GOOGLE

```
GET http://localhost:5000/
```

