

CREATE OR ALTER PROCEDURE getProfileById(
    @profile_id VARCHAR(255))
AS
BEGIN
    SELECT * FROM Profiles WHERE profile_id = @profile_id;
END;
