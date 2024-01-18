CREATE DATABASE gossipGalaxy;

CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL
);