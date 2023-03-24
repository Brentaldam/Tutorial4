# Get a Node.js image
FROM node:19-alpine

# Create the app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy the app source code
COPY . .
# Expose a port (will expose 3000)
EXPOSE 3000
# Run the app
CMD ["npm", "start"]