# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the Node.js application
CMD ["node", "NODEJS1.js"]
