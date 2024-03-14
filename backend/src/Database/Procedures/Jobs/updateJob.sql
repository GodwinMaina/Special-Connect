CREATE OR ALTER PROCEDURE updateJob
    @job_id VARCHAR(250),
    @jobName VARCHAR(250),
    @category VARCHAR(250),
    @description TEXT,
    @duration VARCHAR(250),
    @budget VARCHAR(250),
    @client_id VARCHAR(250),
    @specialist_id VARCHAR(250)
AS
BEGIN
    UPDATE Jobs
    SET jobName = @jobName,
        category = @category,
        description = @description,
        duration = @duration,
        budget = @budget,
        client_id = @client_id,
        specialist_id = @specialist_id

    WHERE job_id = @job_id
END

