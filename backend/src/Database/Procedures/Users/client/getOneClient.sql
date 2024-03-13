
CREATE OR ALTER PROCEDURE getOneClient(@client_id VARCHAR(250))
AS
BEGIN   
    SELECT * FROM Clients WHERE client_id = @client_id
END
