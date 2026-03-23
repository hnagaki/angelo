FROM node:24-trixie-slim

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && \
apt-get install -y git curl \
&& rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@latest
