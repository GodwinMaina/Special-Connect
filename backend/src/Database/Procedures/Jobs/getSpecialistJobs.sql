

CREATE OR ALTER PROCEDURE getJobsBySpecialist
(@specialist_id VARCHAR(250))
AS
BEGIN
    SELECT * FROM Jobs WHERE specialist_id = @specialist_id
END

