

CREATE OR ALTER PROCEDURE getOneJob(
    @job_id VARCHAR(250))
AS
BEGIN
    SELECT * FROM Jobs WHERE job_id = @job_id
END

