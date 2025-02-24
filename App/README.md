## Setup Basic Express App

1. First, let's update the `index.js` file with a basic Express app:

```javascript:App/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

2. Let's update the `package.json` to include Express and add a start script:

```json:App/package.json
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

3. Create a Dockerfile:

```dockerfile:App/Dockerfile
# Use Node.js official image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

To build and push the image to Docker Hub, follow these steps:

1. First, install dependencies locally:
```bash
cd App
npm install
```

2. Build the Docker image (replace `yourusername` with your Docker Hub username):
```bash
docker build -t yourusername/express-app:latest .
```

3. Login to Docker Hub:
```bash
docker login
```

4. Push the image to Docker Hub:
```bash
docker push yourusername/express-app:latest
```

The Express app will create a simple API endpoint at `/` that returns a JSON response. The Dockerfile uses Node.js Alpine image for a smaller footprint and follows best practices for Node.js containerization.

To test locally before pushing:
```bash
docker run -p 3000:3000 yourusername/express-app:latest
```

You can then access the app at `http://localhost:3000`.
