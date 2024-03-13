
CREATE OR ALTER PROCEDURE deleteSp(@specialist_id VARCHAR(250))
AS
BEGIN
    UPDATE Specialist SET isDeleted = 1 WHERE specialist_id = @specialist_id;
END