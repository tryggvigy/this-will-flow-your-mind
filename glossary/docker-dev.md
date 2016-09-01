docker build -t <name of img> .
docker run -it -p 8000:8000 <img name> npm run dev
docker run -it -p 8000:8000 -v `pwd`:/code <img name> npm run dev

Can have mac deps to e.g. use eslint but use same deps compiled for linux in docker.

docker-compose up


https://github.com/talaislensku/tala-api
