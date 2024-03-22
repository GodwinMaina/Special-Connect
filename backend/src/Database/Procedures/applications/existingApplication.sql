
CREATE OR ALTER PROCEDURE checkExistingApplication
  (@job_id VARCHAR(255), @specialist_id VARCHAR(255))
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @Count INT;
    SELECT @Count = COUNT(*)
    FROM applications
    WHERE job_id = @job_id
    AND specialist_id = @specialist_id;

    SELECT @Count AS count;
END;