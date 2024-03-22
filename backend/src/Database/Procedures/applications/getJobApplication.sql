CREATE OR ALTER PROCEDURE getJobApplications
    @job_id VARCHAR(255)
AS
BEGIN
    SELECT  a.apply_id, a.status, j.job_id, j.jobName, s.specialist_id, s.email, s.firstname, s.lastname, c.client_id
    FROM Jobs j
    JOIN applications a ON j.job_id = a.job_id
    JOIN Specialist s ON  a.specialist_id = s.specialist_id
    JOIN Clients c ON j.client_id = c.client_id
    WHERE j.job_id = @job_id;
END;


 