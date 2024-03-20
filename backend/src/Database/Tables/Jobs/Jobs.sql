
CREATE TABLE Jobs(
     job_id VARCHAR(250) PRIMARY KEY,
     jobName VARCHAR(250),
     category VARCHAR(250),
     description TEXT,
     duration VARCHAR(250),
     budget VARCHAR(250),
    client_id VARCHAR(250)
   -- specialist_id VARCHAR(250)
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    -- FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
)

SELECT * FROM Jobs


DROP TABLE Jobs