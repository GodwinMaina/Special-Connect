
CREATE OR ALTER PROCEDURE deleteProfile
    @profile_id VARCHAR(255)
AS
BEGIN
    DELETE FROM Profiles WHERE profile_id = @profile_id;
END;
