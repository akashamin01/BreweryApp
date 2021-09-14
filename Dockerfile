FROM node:14.17.6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 1234
CMD [ "npm" , "start"]
