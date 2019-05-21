FROM node:carbon

WORKDIR /urs/src/

COPY package*.json ./

RUN npm install -g
RUN npm install typescript -g
RUN npm install nodemon -g
RUN npm install sucrase -g
RUN npm install express
RUN npm install --save @types/express 
COPY . .

EXPOSE 3000

CMD [ "npm","start"]
