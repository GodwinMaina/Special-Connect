-- Messages Table
CREATE TABLE Messages (
    message_id VARCHAR(250) PRIMARY KEY,
    client_id VARCHAR(250),
    speciaist_id VARCHAR(250),
    job_id VARCHAR(250),
    TextMessage TEXT,
     timestamp TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist (specialist_id),
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id)
);
