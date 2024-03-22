-- CREATE OR ALTER PROCEDURE getProfileBySpecialistID
--     @specialist_id VARCHAR(255)
-- AS
-- BEGIN
--     SELECT *
--     FROM 
--         Profiles 

--     WHERE 

--         specialist_id = @specialist_id;
-- END;



CREATE OR ALTER PROCEDURE getProfileBySpecialistID
    @specialist_id VARCHAR(255)
AS
BEGIN
    SELECT
        p.profile_id,
        p.specialist_id,
        p.photo,
        p.role,
        p.experience,
        p.education,
        p.location,
        p.languages,
        p.skills,
        p.description,
        p.hourlyRate,
        s.firstName,
        s.email,
        s.phone
    FROM 
        Profiles p
    INNER JOIN 
        Specialist s ON p.specialist_id = s.specialist_id
    WHERE 
        p.specialist_id = @specialist_id;
END;
