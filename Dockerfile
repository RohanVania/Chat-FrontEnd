FROM node:16

# Set the working directory in the container
# Basically to isolate the working directory from the files and folder that come from base image to avaoid conflicts

WORKDIR /CHAT-MICROSERVICE-FRONTEND  

# Copy package.json and package-lock.json to the working directory
COPY ./ .

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory

# Expose a port to communicate with the React app
EXPOSE 5173

# Start your React app
CMD ["npm", "run", "dev"]