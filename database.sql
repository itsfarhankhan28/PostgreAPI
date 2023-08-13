CREATE DATABASE pgserver;

CREATE TABLE server(
    server_id SERIAL PRIMARY KEY;
    description VARCHAR(255)
)