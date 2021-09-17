FROM node:14-alpine
WORKDIR /opt
COPY . app/
RUN cd app && npm install
WORKDIR /opt/app
ENV DB_USER postgres
ENV DB_HOST postgresql
ENV DB_PWD testing
CMD ["node","app.js"]