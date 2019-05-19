#!/usr/bin/env bash

echo "Quick Starting..."
git pull
npm install -g electron --unsafe-perm=true --allow-root
npm install
npm start
