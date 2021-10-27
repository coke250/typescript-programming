#!/bin/bash

if [ -z $1 ]
then
  echo "인자에 생성할 디렉토리명을 입력하세요."
else
  mkdir $1
  cd $1

  npm init --y
  npm i -D typescript ts-node @types/node
  tsc --init

  mkdir src

  # 람다 패키지 설치
  npm i -S ramda
  npm i -D @types/ramda

  # chance 패키지 설치
  npm i -S chance
  npm i -D @types/chance
fi