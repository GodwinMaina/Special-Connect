
CREATE OR ALTER PROCEDURE getJobsByClient
(@client_id VARCHAR(250))
AS
BEGIN
    SELECT * FROM Jobs WHERE client_id = @client_id
END
