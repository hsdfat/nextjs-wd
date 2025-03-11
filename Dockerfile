# Use an official Node.js runtime as a base image
FROM node:22-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) first to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --production --force

# Copy the rest of the application code
COPY . .

# Copy .env file (if you want to include it in the build)
COPY .env* ./

# Build the Next.js app
RUN npm run build

# --- Start a new stage for production ---
FROM node:22-alpine AS runner

# Set working directory inside the container
WORKDIR /app

# Copy only the built assets from the previous stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/public public

# Optional: Copy .env file to the runner stage if needed
COPY --from=builder /app/.env* ./

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=3000

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]