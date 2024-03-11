#!/bin/bash

npm init 

tsc --init

npm install express

touch .gitignore

echo "node_modules/"  >> .gitignore

touch .env

echo ".env/"  >> .gitignore


mkdir restClient

mkdir src

cd src

touch server.ts

mkdir Config Controllers Database Interfaces Middlewares Routes Validators

cd Config 

touch sql.config.ts

cd ../

cd Database

mkdir Tables Procedures

cd ../
cd ../
