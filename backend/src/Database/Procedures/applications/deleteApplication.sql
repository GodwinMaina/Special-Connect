CREATE OR ALTER PROCEDURE deleteApplication 
    @apply_id VARCHAR(250)
AS
BEGIN
    DELETE FROM applications WHERE apply_id = @apply_id;
END