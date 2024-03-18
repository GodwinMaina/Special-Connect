


-- Send Message Procedure
CREATE OR ALTER PROCEDURE SendMessage
    @client_id VARCHAR(250),
    @specialist_id VARCHAR(250),
    @job_id VARCHAR(250),
    @TextMessage NVARCHAR(MAX)
AS
BEGIN
    INSERT INTO Messages (client_id, specialist_id, job_id, TextMessage)
    VALUES (@client_id, @specialist_id, @job_id, @TextMessage);
END;
GO





-- Get Messages By User Procedure
CREATE OR ALTER PROCEDURE GetMessagesByUser
    @client_id VARCHAR(250),
    @specialist_id VARCHAR(250)
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Clients WHERE client_id = @client_id)
    BEGIN
        -- Client ID exists in Clients table
        SELECT * FROM Messages WHERE client_id = @client_id;
    END
    ELSE IF EXISTS (SELECT 1 FROM Specialists WHERE specialist_id = @specialist_id)
    BEGIN
        -- Specialist ID exists in Specialists table
        SELECT * FROM Messages WHERE specialist_id = @specialist_id;
    END
    ELSE
    BEGIN
        -- Neither Client ID nor Specialist ID found
        RAISERROR('Client ID or Specialist ID not found.', 16, 10); 
        RETURN;
    END;
END;
GO







-- Get Messages By Job_id
CREATE OR ALTER PROCEDURE GetMessagesByJob
    @job_id VARCHAR(250)
AS
BEGIN
    SELECT * FROM Messages
    WHERE job_id = @job_id;
END;
GO




-- Delete Message By ID Procedure
CREATE OR ALTER PROCEDURE DeleteMessageByID
    @message_id VARCHAR(250)
AS
BEGIN
    DELETE FROM Messages
    WHERE message_id = @message_id;
END;
GO
