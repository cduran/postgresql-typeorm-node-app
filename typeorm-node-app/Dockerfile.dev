FROM node:14-alpine
WORKDIR /opt
COPY . app/
RUN cd app && npm install
WORKDIR /opt/app
RUN npm run build
CMD ["npm", "start"]