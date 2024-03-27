CREATE OR ALTER PROCEDURE createChat(
    @chatId VARCHAR(255),
    @client_id VARCHAR(255),
    @specialist_id VARCHAR(255),
    @txtMessage text,
    @messageId VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Chats(chatId, client_id, specialist_id, startedAt)
    VALUES(@chatId, @client_id, @specialist_id, GETDATE());

    INSERT INTO Messages(messageId, chatId, txtMessage, sentAt)
	VALUES(@messageId, @chatId, @txtMessage, GETDATE());
END;