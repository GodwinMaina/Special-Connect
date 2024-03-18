

CREATE TABLE Profiles
(
    profile_id VARCHAR(250) PRIMARY KEY,
    specialist_id VARCHAR(250),
    photo VARCHAR(250 ),
    role VARCHAR(250),
    experience VARCHAR(250),
    education VARCHAR(250),
    location VARCHAR(250),
    languages VARCHAR(250),
    skills VARCHAR(250),
    description VARCHAR(250),
    hourlyRate VARCHAR(250),
    isWelcomed BIT DEFAULT 0,
    isProfiled BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
);





SELECT *FROM Profiles

DROP TABLE Profiles


