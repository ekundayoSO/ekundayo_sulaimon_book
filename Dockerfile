# 1. Use an official Node.js image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the app
COPY . .

# 5. Run Jest tests (default command)
CMD ["npm", "test"]

