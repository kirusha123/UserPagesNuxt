FROM node:14
RUN npm install -g serve
WORKDIR /user-pages-front
COPY package.json /user-pages-front
RUN npm install
COPY . /user-pages-front
RUN npm run build
CMD ["serve", "dist"]