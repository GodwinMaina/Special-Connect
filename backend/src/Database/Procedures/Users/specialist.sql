
CREATE OR ALTER PROCEDURE createSpecialist (
    @specialist_id VARCHAR(250),
    @firstName VARCHAR(250),
    @lastName VARCHAR(250),
    @email VARCHAR(250),
    @password VARCHAR(250),
    @photo VARCHAR(250),
    @city VARCHAR(250),
    @country VARCHAR(250),
    @postal VARCHAR(250),
    @phone VARCHAR(250)
)
AS
BEGIN
    INSERT INTO Specialist (specialist_id, firstName, lastName, email, password, photo, city, country,postal, phone )
    VALUES (@specialist_id, @firstName, @lastName, @email, @password, @photo, @city, @country,@postal, @phone);
END;
