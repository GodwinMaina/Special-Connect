CREATE TABLE Specialist
(
     specialist_id VARCHAR(250) PRIMARY KEY,
     photo VARCHAR(250) NOT NULL,
     firstName VARCHAR(250) NOT NULL,
     lastName VARCHAR(250) NOT NULL,
     email VARCHAR(250) NOT NULL UNIQUE,
     password VARCHAR(250) NOT NULL,
     location VARCHAR(250) NOT NULL,
     phone VARCHAR(250) NOT NULL,

     role VARCHAR(250) NOT NULL,
     experience VARCHAR(250) NOT NULL,
     education VARCHAR(250) NOT NULL,
     language VARCHAR(250) NOT NULL,
     hourlyRate VARCHAR(250) NOT NULL,
     skillSet VARCHAR(250) NOT NULL,
     description VARCHAR(250) NOT NULL,

     isAdmin BIT DEFAULT 0,
     isWelcomed BIT DEFAULT 0,
     isDeleted BIT DEFAULT 0
);

SELECT * FROM Specialist

DROP TABLE Specialist