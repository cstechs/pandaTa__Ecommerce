#  Dockerfile for Node Express Backend

FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

# Copy app source code
COPY . .

RUN npm install --silent



# Exports
EXPOSE 5001

CMD ["npm","run","dev"]