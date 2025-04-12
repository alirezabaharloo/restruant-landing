# docker/react/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY ./frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY ./frontend .

# Expose port 5173 for Vite dev server
EXPOSE 3000

# Start Vite development server
CMD ["npm", "run", "dev"]