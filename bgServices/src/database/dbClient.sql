CREATE OR ALTER PROCEDURE WELCOMECLIENT
AS
BEGIN
    SELECT *
    FROM Clients
    WHERE isWelcomed = 0 and isDeleted = 0
END

-- UPDATE Clients
-- SET isWelcomed = 0
