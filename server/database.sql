CREATE DATABASE gossipGalaxy;

CREATE TABLE login (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES login(user_id),
    description TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat_room (
    room_id SERIAL PRIMARY KEY,
    room_name VARCHAR (100) NOT NULL
);

CREATE TABLE user_chat_room (
    user_id INTEGER REFERENCES login(user_id),
    room_id INTEGER REFERENCES chat_rooms(room_id),
    PRIMARY KEY (user_id, room_id)
);