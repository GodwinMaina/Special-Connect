CREATE OR ALTER PROCEDURE resetPassword
(
    @email VARCHAR(250),
    @password VARCHAR(250)
)
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Specialist WHERE email = @email)
    BEGIN
        UPDATE Specialist SET password = @password WHERE email = @email
    END
    ELSE IF EXISTS (SELECT 1 FROM Clients WHERE email = @email)
    BEGIN
        UPDATE Clients SET password = @password WHERE email = @email
    END
    ELSE
    BEGIN
        -- If email doesn't exist in either table, return an indication that no update was performed
        SELECT 'No user found with the specified email' AS Result
    END
END
