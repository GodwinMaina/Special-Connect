CREATE OR ALTER TRIGGER create_profile
ON Specialist
AFTER INSERT
AS
BEGIN

    SET NOCOUNT ON;
    
    -- Inserting into Profiles table with specialist_id and profile_id from inserted
    INSERT INTO Profiles (profile_id, specialist_id, photo, role, experience, location, education, languages, skills, description, hourlyRate)
    SELECT '', i.specialist_id, '', '', '', '', '', '', '', '', ''
    FROM inserted i;
END;
  

DROP TRIGGER create_profile