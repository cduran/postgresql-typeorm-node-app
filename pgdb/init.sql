create table if not exists employee(
id SERIAL,
name varchar(50),
job varchar(40),
department varchar(40),
salary int,
hire_date date,
PRIMARY KEY (id));

-- INSERT into users (id, username, password)
--     values (1,'carlos', 'password'),
--            (2,'cduran', 'password');