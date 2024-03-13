
CREATE OR ALTER PROCEDURE createProfile (
    @profile_id VARCHAR(250),
    @specialist_id VARCHAR(250),
    @role VARCHAR(250),
    @experience VARCHAR(250),
    @education VARCHAR(250),
    @languages VARCHAR(250),
    @skills VARCHAR(250),
    @description VARCHAR(250),
    @hourlyRate VARCHAR(250)
)
AS
BEGIN
    INSERT INTO Profiles (profile_id, specialist_id, role, experience, education, languages, skills, description, hourlyRate)
    VALUES (@profile_id, @specialist_id, @role, @experience, @education, @languages, @skills, @description, @hourlyRate);
END;

