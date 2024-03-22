-- Messages Table
CREATE TABLE Messages (
    message_id VARCHAR(250) PRIMARY KEY,
    client_id VARCHAR(250),
    specialist_id VARCHAR(250),
    job_id VARCHAR(250),
    messagetxt TEXT,
     timestamp TIMESTAMP,
    isDeleted BIT DEFAULT 0,
    isRead BIT DEFAULT 0,
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist (specialist_id),
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id)
);



-- DROP TABLE Messages

