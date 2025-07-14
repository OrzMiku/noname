FROM node:alpine
RUN npm install pm2 -g

WORKDIR /app
COPY . .
RUN rm -rf noname-server.exe .git .github README.md Dockerfile .gitignore .dockerignore
RUN npm install express@4.21.2 minimist body-parser path fs ws

EXPOSE 80
EXPOSE 8080

CMD [ "pm2-runtime", "process.yml" ]
