create table customers 
(
id serial primary key,
first_name varchar(100),
last_name varchar(200),
email varchar(300)
);
create table tablets
(
id serial primary key,
name varchar(200),
unq varchar(50),
inventory integer
);
create table purchases 
(
id serial primary key,
item_id integer references tablets(id),
purchase_qty integer
);