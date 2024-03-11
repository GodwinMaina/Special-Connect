#!/bin/bash

npm init 

tsc --init


touch .gitignore

echo "node_modules/"  >> .gitignore

touch .env

echo ".env/"  >> .gitignore

mkdir templates

mkdir src

cd src

touch server.ts

mkdir Config mailServices database Interfaces 

cd Config 

touch sqlConfig.ts

cd ../
cd ../
