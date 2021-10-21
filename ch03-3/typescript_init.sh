#!/bin/bash

npm init --y
npm i -D typescript ts-node
npm i -D @types/node
npm i
tsc --init

mkdir src
touch ./src/index.ts