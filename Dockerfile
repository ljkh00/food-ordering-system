FROM node:16-alpine

WORKDIR /app

# Copy backend files
COPY backend/package*.json ./
RUN npm install --production

COPY backend/ .

# Copy frontend files to serve statically
COPY frontend/ ./public/

EXPOSE 3000

CMD ["node", "server.js"]