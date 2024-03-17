
CREATE OR ALTER PROCEDURE updateProfile
    @profile_id VARCHAR(255),
    @specialist_id VARCHAR(255),
    @photo VARCHAR(255),
    @role VARCHAR(255),
    @experience VARCHAR(255),
    @education VARCHAR(255),
    @languages VARCHAR(255),
    @location VARCHAR(255),
    @skills VARCHAR(255),
    @description VARCHAR(MAX),
    @hourlyRate VARCHAR(255)
AS
BEGIN
    UPDATE Profiles
    SET specialist_id = @specialist_id,
        photo = @photo,
        role = @role,
        experience = @experience,
        education = @education,
        languages = @languages,
        location = @location,
        skills = @skills,
        description = @description,
        hourlyRate = @hourlyRate
        
    WHERE profile_id = @profile_id;
END;
