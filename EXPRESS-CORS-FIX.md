# Fix CORS for Express.js API

Your API is stuck in loading because of CORS (Cross-Origin Resource Sharing) issues.

## Solution: Add CORS to your Express.js server

### Option 1: Using the `cors` package (Recommended)

1. **Install the cors package** on your API server:

```bash
npm install cors
```

2. **Add to your main Express file** (usually `app.js`, `server.js`, or `index.js`):

```javascript
const express = require("express");
const cors = require("cors");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: [
    "https://kayan-tashteebbeltaqseet.online",
    "http://localhost:3000", // For development
    "http://localhost:3001", // Alternative dev port
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Your existing routes and middleware below...
```

### Option 2: Manual CORS middleware (if you can't install packages)

Add this middleware BEFORE your routes:

```javascript
const express = require("express");
const app = express();

// Manual CORS middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://kayan-tashteebbeltaqseet.online",
    "http://localhost:3000",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Your existing routes below...
```

### Option 3: Quick fix for testing (NOT for production)

For quick testing only, you can allow all origins:

```javascript
const cors = require("cors");
app.use(cors()); // Allows all origins
```

## After adding CORS:

1. **Restart your Express server**
2. **Rebuild your React app**: `npm run build`
3. **Upload to cPanel and test**

## Verification

After restarting the API server, open your deployed website and check the browser console (F12). You should see:

- Console logs showing the API requests
- Data loading successfully
- No CORS errors

The timeout will now show an error message after 10 seconds if there's still an issue.
