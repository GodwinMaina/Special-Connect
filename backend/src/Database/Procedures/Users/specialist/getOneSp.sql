
CREATE OR ALTER PROCEDURE getOneSp(@specialist_id VARCHAR(250))
AS
BEGIN   
    SELECT * FROM Specialist WHERE specialist_id = @specialist_id
END
