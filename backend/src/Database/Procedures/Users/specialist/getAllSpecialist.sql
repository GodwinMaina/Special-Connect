

CREATE OR ALTER PROCEDURE getAllSpecialist
AS
BEGIN
    SELECT * FROM Specialist WHERE isDeleted = 0
END