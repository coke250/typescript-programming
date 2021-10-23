#!/bin/bash

if [ -z $1 ]
then
  echo "인자에 생성할 디렉토리명을 입력하세요."
else
  mkdir $1
  cd $1

  npm init --y
  npm i -D typescript ts-node
  npm i -D @types/node
  npm i
  tsc --init

  mkdir src
  cd src
  touch index.ts
fi