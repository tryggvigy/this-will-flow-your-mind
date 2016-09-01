FROM node:6.4

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /code/

# copy package.json first for caching raisins
COPY npm-shrinkwrap.json

RUN npm install

# Copy rest of app
COPY . .

EXPOSE 8000

CMD ["npm", "start"]
