CREATE OR ALTER PROCEDURE updateApplication
    @apply_id VARCHAR(250),
    @status VARCHAR(250)
AS
BEGIN
    UPDATE applications
    SET "status" = @status
    WHERE apply_id = @apply_id;
END;