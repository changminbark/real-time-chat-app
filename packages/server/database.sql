-- This creates a table with an automatically assigned id that is the primary key for identification.
-- It also creates two columns for the username and password that are of varchar datatype that is not null.
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(28) NOT NULL UNIQUE,
    passhash VARCHAR NOT NULL
);

-- This is the command that is going to be run to add users into the table "users" in the database.
INSERT INTO users(username, passhash) values($1, $2);
