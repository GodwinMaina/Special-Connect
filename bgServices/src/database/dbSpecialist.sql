CREATE OR ALTER PROCEDURE WELCOMESPECIALIST
AS
BEGIN
    SELECT *
    FROM Specialist
    WHERE isWelcomed = 0 and isDeleted = 0
END;

-- UPDATE Specialist 
-- SET isWelcomed = 0
