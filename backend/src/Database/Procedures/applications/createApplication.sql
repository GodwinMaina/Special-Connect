CREATE OR ALTER PROCEDURE createApplication 
(
    @apply_id VARCHAR(250),
    @job_id VARCHAR(250), 
    @client_id VARCHAR(250), 
    @specialist_id VARCHAR(250)) 
AS
BEGIN
INSERT INTO
applications (apply_id, job_id, client_id, specialist_id)
VALUES
(@apply_id, @job_id, @client_id, @specialist_id)
END