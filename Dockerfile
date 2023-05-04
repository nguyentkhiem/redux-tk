FROM node:18-alpine
WORKDIR /var/www/react_base
COPY ./package*.json ./
RUN yarn install
CMD ["yarn", "start"]