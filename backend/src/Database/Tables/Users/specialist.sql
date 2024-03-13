CREATE TABLE Specialist
(
     specialist_id VARCHAR(250) PRIMARY KEY,
     firstName VARCHAR(250) NOT NULL,
     lastName VARCHAR(250) NOT NULL,
     email VARCHAR(250) NOT NULL UNIQUE,
     password VARCHAR(250) NOT NULL,
     photo VARCHAR(250) NOT NULL,
     city VARCHAR(250) NOT NULL,
     country VARCHAR(250) NOT NULL,
     postal VARCHAR(250) NOT NULL,
     phone VARCHAR(250) NOT NULL,
     isAdmin BIT DEFAULT 0,
     isWelcomed BIT DEFAULT 0,
     isDeleted BIT DEFAULT 0
);

SELECT * FROM Specialist