# stock-management-for-medicines
<h2>Setup</h2>

1.  Need to download PostgreSQL (https://www.postgresql.org/)
and install (set password:1234) then setup C:\Program Files\PostgreSQL\14\bin and C:\Program Files\PostgreSQL\14\lib in system environment variables.

npm init -y

npm install pg-promise
npm install express
npm install --save-dev nodemon
npm install express-es6-template-engine

createdb -U postgres tabeazy

psql -f schema.sql -U postgres tabeazy && psql -f seed.sql -U postgres tabeazy

npm run dev
