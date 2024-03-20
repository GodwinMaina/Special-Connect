
CREATE TABLE applications(
    apply_id VARCHAR(250) PRIMARY KEY,
    job_id VARCHAR(250),
    client_id VARCHAR(250),
    specialist_id VARCHAR(250),
    "status" VARCHAR(250) CHECK ("status" IN ('PENDING', 'ACCEPTED', 'REJECTED')) DEFAULT 'PENDING',
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id),
    FOREIGN KEY (client_id) REFERENCES Clients(client_id)
)

DROP TABLE applications