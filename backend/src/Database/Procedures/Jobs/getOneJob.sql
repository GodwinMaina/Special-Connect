

CREATE OR ALTER PROCEDURE getOneJob(
    @job_id VARCHAR(250))
AS
BEGIN
    SELECT * FROM Jobs WHERE job_id = @job_id
END


-- CREATE OR ALTER PROCEDURE getOneJob(
--     @job_id VARCHAR(250)
-- )
-- AS
-- BEGIN
--     SELECT 
--         Jobs.*, -- Select all columns from Jobs table
--         Specialist.firstName,
--         Specialist.email,
--         Specialist.phone,
--         Profiles.role,
--         Profiles.experience,
--         Profiles.hourlyRate
--     FROM 
--         Jobs
--     INNER JOIN 
--         Specialist ON Jobs.specialist_id = Specialist.specialist_id -- Join Specialist table
--     INNER JOIN
--         Profiles ON Jobs.specialist_id = Profiles.specialist_id -- Join Profiles table
--     WHERE 
--         Jobs.job_id = @job_id;
-- END

