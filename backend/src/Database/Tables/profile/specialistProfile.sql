CREATE TABLE Profiles
(
    profile_id VARCHAR(250) PRIMARY KEY,
    specialist_id VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    experience VARCHAR(250) NOT NULL,
    education VARCHAR(250) NOT NULL,
    languages VARCHAR(250) NOT NULL,
    skills VARCHAR(250) NOT NULL,
    description VARCHAR(250) NOT NULL,
    hourlyRate VARCHAR(250) NOT NULL,
    isWelcomed BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0,
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
);

SELECT *FROM Profiles

DROP TABLE Profiles