

CREATE TABLE Review (
    review_id VARCHAR(250) PRIMARY KEY,
    client_id VARCHAR(250),
    specialist_id VARCHAR(250),
    comment TEXT,
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
)

SELECT * FROM Review

