
CREATE TABLE Chats(
	chatId VARCHAR(250) PRIMARY KEY NOT NULL,
	client_id VARCHAR(250),
	specialist_id VARCHAR(250),
	startedAt VARCHAR(250)
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (specialist_id) REFERENCES Specialist(specialist_id)
)


DROP TABLE Chats

-- CREATE TABLE Chats(
-- 	chatId VARCHAR(250) PRIMARY KEY NOT NULL,
-- 	senderId VARCHAR(250),
-- 	receiverId VARCHAR(250),
-- 	startedAt VARCHAR(250)
-- )