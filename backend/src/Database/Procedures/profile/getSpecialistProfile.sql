CREATE OR ALTER PROCEDURE getProfileBySpecialistID
    @specialist_id VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM 
        Profiles 

    WHERE 

        specialist_id = @specialist_id;
END;

