

CREATE OR ALTER PROCEDURE getAllClients
AS
BEGIN
    SELECT * FROM Clients WHERE isDeleted = 0
END