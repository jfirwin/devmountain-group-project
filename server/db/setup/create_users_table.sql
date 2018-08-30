CREATE TABLE users (
    authID VARCHAR(50) UNIQUE,
    username VARCHAR(100) UNIQUE,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    theme VARCHAR(20),
    description VARCHAR(140),
    imgurl VARCHAR(300)
)
