# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose app port (ajuste se necessário)
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start:prod"]
