FROM node:12.11.0

#WORKDIR .
#COPY webpack.config.js /src/webpack.config.js

RUN npm init -y
RUN npm install -g webpack
RUN npm install --save react react-dom
RUN npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

CMD ["webpack", "-d", "--watch"]