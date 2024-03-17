CREATE OR ALTER PROCEDURE createJob(
    @job_id VARCHAR(250),
    @jobName VARCHAR(250),
    @category VARCHAR(250),
    @description TEXT,
    @duration VARCHAR(250),
    @budget VARCHAR(250),
    @client_id VARCHAR(250)
    -- @specialist_id VARCHAR(250))
AS
BEGIN
    INSERT INTO Jobs (job_id, jobName, category, description, duration, budget, client_id)
    VALUES (@job_id, @jobName, @category, @description, @duration, @budget, @client_id)
END

