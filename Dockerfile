FROM node:latest

WORKDIR .
COPY webpack.config.js ./src/webpack.config.js

RUN npm init -y
RUN npm install -g webpack
RUN npm install --save react react-dom
RUN yarn add react react-dom
RUN yarn add -dev @babel/core babel-loader @babel/preset-react @babel/preset-env
RUN npm install --save-dev webpack webpack

CMD ["webpack", "-d", "--watch"]