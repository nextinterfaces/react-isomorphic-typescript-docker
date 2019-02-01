############################################################
# Dockerfile to build Nginx Installed Containers
# Based on Ubuntu
############################################################

# Set the base image to Ubuntu
FROM ubuntu

# Update the repository
RUN apt-get update

# Install necessary tools
RUN apt-get install -y vim nano wget dialog net-tools

# Download and Install NodeJS
RUN apt-get install -y nodejs

RUN echo $(pwd)
RUN echo $(node -v)

# RUN npm install

# Create directory for storing NodeJS or API code and copy sample index.js
# RUN ["mkdir", "/home/nodejstest/"]
# ADD dist/index.js /home/nodejstest

# Expose ports
EXPOSE 9090

# Start NodeJS with sample program
CMD ["nodejs", "/app/api_container/dist/index.js"]

