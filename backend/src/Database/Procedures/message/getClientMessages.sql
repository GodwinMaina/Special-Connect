



CREATE OR ALTER PROCEDURE getClientMessages
    @client_id VARCHAR(255)
AS
BEGIN
    SELECT M.message_id, m.messagetxt, m.isDeleted, m.isRead,
           s.firstName AS specialistName,
           c.firstName AS clientName,
           m.specialist_id, m.client_id AS client_id
    FROM Messages m
    LEFT JOIN Specialist s ON m.specialist_id = s.specialist_id
    LEFT JOIN Clients c ON m.client_id = c.client_id
    WHERE m.client_id = @client_id;
END;