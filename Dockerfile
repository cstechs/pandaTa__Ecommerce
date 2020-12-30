FROM node:alpine
WORKDIR "/app"

ADD package.json .
RUN npm install --force
ADD . .

CMD ["npm","run","dev"]