

CREATE OR ALTER PROCEDURE getJobsByCategory
    @category VARCHAR(250)
AS
BEGIN
    SELECT * FROM Jobs WHERE category = @category
END
