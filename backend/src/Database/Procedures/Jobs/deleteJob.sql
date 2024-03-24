

CREATE OR ALTER PROCEDURE deleteJob
(@job_id VARCHAR(250))
AS
BEGIN
    UPDATE Jobs 
    SET IsDeleted = 1

    WHERE job_id = @job_id
END;




