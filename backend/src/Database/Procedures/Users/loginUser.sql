CREATE OR ALTER PROCEDURE loginUser
(
    @email VARCHAR(250),
    @password VARCHAR(250)
)
AS
BEGIN
    -- Check if the email exists in the Specialist table
    IF EXISTS (SELECT 1 FROM Specialist WHERE email = @email)
    BEGIN
        SELECT 'Specialist' AS UserType, * 
        FROM Specialist 
        WHERE email = @email
    END
    
    -- Check if the email exists in the Clients table
    ELSE IF EXISTS (SELECT 1 FROM Clients WHERE email = @email)
    BEGIN
        SELECT 'Client' AS UserType, * 
        FROM Clients 
        WHERE email = @email
    END
    
    -- If the email doesn't exist in either table, return NULL
    ELSE
    BEGIN
        SELECT NULL AS UserType, NULL AS UserID, NULL AS email, NULL AS password
    END
END
