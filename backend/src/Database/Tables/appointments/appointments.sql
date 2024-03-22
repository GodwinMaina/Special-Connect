
CREATE TABLE Appointments (
    appointment_id VARCHAR(250) PRIMARY KEY,
    client_id VARCHAR(250),
    specialist_id VARCHAR(250),
    message TEXT,
    time DATETIME,
    status BIT DEFAULT 0
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
);

DROP TABLE Appointments