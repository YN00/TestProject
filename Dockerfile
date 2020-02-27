FROM node:latest

RUN npm init
RUN yarn add react react-dom
RUN yarn add -dev @babel/core babel-loader @babel/preset-react @babel/preset-env
RUN npm install --save-dev webpack webpack