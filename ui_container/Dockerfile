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

# Download and Install Nginx
RUN apt-get install -y nginx

#apt-get update -yq \
#    && apt-get install curl gnupg -yq \
#    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
#    && apt-get install nodejs -yq

#RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
#RUN apt-get install --yes nodejs
#RUN apt-get install --yes build-essential

# Download and Install NodeJS
RUN apt-get install -y nodejs

RUN echo $(pwd)
RUN echo $(node -v)

EXPOSE 9080

# Start NodeJS with sample program
# CMD ["nodejs", "/home/nodejstest/index.js"]
CMD ["nodejs", "/app/ui_container/dist/server.js"]

