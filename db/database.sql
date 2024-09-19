create database companydb;

use companydb;

create table employees(
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default null,
    primary key (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'max', 1500);