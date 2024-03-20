CREATE OR ALTER PROCEDURE getTalentApplications
    @specialist_id VARCHAR(255)
AS
BEGIN
    SELECT j.job_id, j.jobName
    FROM Jobs j
    JOIN applications a ON j.job_id = a.job_id
    WHERE a.specialist_id = @specialist_id;
END;