CREATE TABLE Specialist
(
     specialist_id VARCHAR(250) PRIMARY KEY NOT NULL,
     firstName VARCHAR(250) NOT NULL,
     lastName VARCHAR(250) NOT NULL,
     email VARCHAR(250) NOT NULL UNIQUE,
     password VARCHAR(250) NOT NULL,
     phone VARCHAR(250) NOT NULL,
     isAdmin BIT DEFAULT 0,
     isWelcomed BIT DEFAULT 0,
     isProfiled BIT DEFAULT 0,
     isDeleted BIT DEFAULT 0,
);



SELECT * FROM Specialist
SELECT * FROM Profiles
SELECT * FROM Clients
SELECT * FROM Profiles

DROP TABLE Specialist

DELETE  FROM Specialist
WHERE specialist_id ='ace8728d-c4a9-4472-99d8-b434764bd6e3' 



