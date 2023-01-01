
FROM node:18-bullseye-slim 
 
WORKDIR /usr/src/app
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .
 
# Install any needed packages
RUN npm i
 
# Bundle app source
COPY . .
 
EXPOSE 1221
 
CMD [ "npm","run", "start_for_docker" ]