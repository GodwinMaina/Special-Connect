-- CREATE OR ALTER PROCEDURE getSpecialistApplications
-- (
--     @specialist_id VARCHAR(250))
-- AS
-- BEGIN
--     SELECT a.apply_id, j.job_id, c.firstName, c.email, c.phone, j.category, j.budget, j.duration, j.description, c.client_id AS firstName, a.status
--     FROM Jobs j
--     JOIN applications a ON j.job_id = a.job_id
--     JOIN Clients c ON  j.client_id = c.client_id
--     WHERE a.specialist_id = @specialist_id;
-- END;  


CREATE OR ALTER PROCEDURE getSpecialistApplications
(
    @specialist_id VARCHAR(250)
)
AS
BEGIN
    -- Update status to 'approved' for applications where status is null
    UPDATE applications
    SET status = 'ACCEPTED'
    WHERE specialist_id = @specialist_id
    
    -- Retrieve specialist applications
    SELECT a.apply_id, j.job_id, j.jobName,c.firstName, c.email, c.phone, j.category, j.budget, j.duration, j.description, c.client_id AS firstName, a.status
    FROM Jobs j
    JOIN applications a ON j.job_id = a.job_id
    JOIN Clients c ON j.client_id = c.client_id
    WHERE a.specialist_id = @specialist_id;
END;
