# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# If your server.js is in the src folder, you need to change the WORKDIR to /usr/src/app/src
WORKDIR /usr/src/app/src

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
CMD ["node", "server.js"]
