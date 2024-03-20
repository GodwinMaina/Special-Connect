CREATE OR ALTER PROCEDURE getJobApplications
    @job_id VARCHAR(255)
AS
BEGIN
    SELECT j.job_id, j.jobName, s.specialist_id, s.firstname, s.lastname, c.client_id, c.firstName
    FROM Jobs j
    JOIN applications a ON j.job_id = a.job_id
    JOIN Specialists s ON  a.specialist_id = s.specialist_id
    JOIN Clients c ON j.client_id = c.client_id
    WHERE j.job_id = @job_id;
END;