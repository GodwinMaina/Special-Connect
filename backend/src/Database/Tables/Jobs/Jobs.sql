
CREATE TABLE Jobs(
     job_id VARCHAR(250) PRIMARY KEY,
     jobName VARCHAR(250),
     category VARCHAR(250),
     description TEXT,
     duration VARCHAR(250),
     budget VARCHAR(250),
    client_id VARCHAR(250),
    specialist_id VARCHAR(250),
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
)

SELECT * FROM Jobs


DROP TABLE Jobs

ALTER TABLE Jobs
ADD specialist_id VARCHAR(250);
ALTER TABLE Jobs
ADD CONSTRAINT FK_Jobs_Specialist FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id);


ALTER TABLE Jobs
ADD profile_id VARCHAR(250)
ALTER TABLE Jobs
ADD CONSTRAINT FK_Jobs_Profiles FOREIGN KEY (profile_id) REFERENCES Profiles(profile_id);
