
CREATE TABLE Messages(
	messageId VARCHAR(250) PRIMARY KEY NOT NULL,
	chatId VARCHAR(250),
	txtMessage VARCHAR(max),
	sentAt DATETIME,
	FOREIGN KEY(chatId) REFERENCES Chats(chatId)
)


-- DROP TABLE Messages
