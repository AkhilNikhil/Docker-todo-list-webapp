# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
