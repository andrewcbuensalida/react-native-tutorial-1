open pg shell
\l lists all the databases

-- to create database
CREATE DATABASE heat;

-- switch to new database 
\c heat

-- display tables
\d

-- this is to create the table. have users in the future, but for now just heats
create table user (
    id bigserial not null primary key,
    username varchar(50) not null,
    password varchar(50) not null,
);

CREATE TABLE heats (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    -- user_id BIGINT NOT NULL REFERENCES user(id),
    title VARCHAR(50) NOT NULL,
    body VARCHAR(255) NOT NULL,
    rank INT NOT NULL check( rank > 0 )
);

-- populate table with some data
insert into heats (title,body,rank) values ('First run of the app', 'This is my first heat. I enjoyed it very much.', '1');
insert into heats (title,body,rank) values ('Side stitches', 'I got side stitches.', '9'); 

-- check to see if data is in
select * from heats;

-- exit out of database
\q

-- exit out of regular system user
exit

select *
from doctors
    left join(
        select doctor_id,
            count(*),
            TRUNC(AVG(rating), 1) as average_rating
        from reviews
        group by doctor_id
    ) reviews on doctors.id = reviews.doctor_id;


    ?
