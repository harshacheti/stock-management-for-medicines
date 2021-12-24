# stock-management-for-medicines
<h2>Setup</h2>

1.  Need to download PostgreSQL (https://www.postgresql.org/)
and install (**set password:1234**) then setup C:\Program Files\PostgreSQL\14\bin and C:\Program Files\PostgreSQL\14\lib in system environment variables.

2.  clone repo.

Paste step 3,4 and 5 in Project terminal

3.  ```createdb -U postgres tabeazy```
4.  ```psql -f schema.sql -U postgres tabeazy```
5.  ```psql -f seed.sql -U postgres tabeazy```

6.  ```npm run dev```
7.  Now http://localhost:4000/ should give " **Cannot GET /** "
7.  use post man for testing
8.  ![image](https://user-images.githubusercontent.com/39665302/147343819-f0b5176d-f569-4ac9-ad7a-1b2ca22cb0a2.png)

