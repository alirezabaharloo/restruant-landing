#!/bin/bash
sudo systemctl stop postgresql
docker container prune
if [ "$(docker ps -aq -f name=backend)" ]; then
    docker rm -f backend
fi
if [ "$(docker ps -aq -f name=db)" ]; then
    docker rm -f db
fi
if [ "$(docker ps -aq -f name=frontend)" ]; then
    docker rm -f db
fi
docker-compose up --build