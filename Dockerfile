FROM node:10.15.3

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

CMD yarn start
