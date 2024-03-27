
CREATE OR ALTER PROCEDURE createMessage(
	@messageId VARCHAR(255),
	@chatId VARCHAR(255),
	@txtMessage VARCHAR(max)
)
AS
BEGIN
	INSERT INTO Messages(messageId, chatId, txtMessage, sentAt)
	VALUES(@messageId, @chatId, @txtMessage, GETDATE());
END;