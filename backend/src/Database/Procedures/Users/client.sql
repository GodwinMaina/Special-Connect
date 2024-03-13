
CREATE OR ALTER PROCEDURE createClient (
    @client_id VARCHAR(250),
    @firstName VARCHAR(250),
    @lastName VARCHAR(250),
    @email VARCHAR(250),
    @password VARCHAR(250),
    @phone VARCHAR(250)
)
AS
BEGIN
    INSERT INTO Clients (client_id, firstName, lastName, email, password,phone )
    VALUES (@client_id, @firstName, @lastName, @email, @password, @phone);
END;
