FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD node index.js

# This will create the docker imgae for application , you can push into hub.docker.com so that everyone can pull it
# Also can run container based on this image