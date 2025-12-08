#!/bin/bash 

# prettier formatting
# npx prettier . --write

# install all tthe necessary gems
docker compose pull

# deploy
docker compose up

# http:://localhost:8080
