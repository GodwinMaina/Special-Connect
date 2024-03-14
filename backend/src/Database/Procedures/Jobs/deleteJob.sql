

CREATE OR ALTER PROCEDURE deleteJob
(@job_id VARCHAR(250))
AS
BEGIN
    DELETE FROM Jobs WHERE job_id = @job_id
END

