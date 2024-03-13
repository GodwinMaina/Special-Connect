
CREATE OR ALTER PROCEDURE deleteClient(@client_id VARCHAR(250))
AS
BEGIN
    UPDATE Clients SET isDeleted = 1 WHERE client_id = @client_id;
END