
CREATE OR ALTER PROCEDURE createSpecialist (
    @specialist_id VARCHAR(250),
    @photo VARCHAR(250),
    @firstName VARCHAR(250),
    @lastName VARCHAR(250),
    @email VARCHAR(250),
    @password VARCHAR(250),
    @location VARCHAR(250),
    @phone VARCHAR(250),
    @role VARCHAR(250) ,
    @experience VARCHAR(250),
    @education VARCHAR(250),
    @language VARCHAR(250),
    @hourlyRate VARCHAR(250),
    @skillSet VARCHAR(250),
    @description VARCHAR(250)
)
AS
BEGIN
    INSERT INTO Specialist (specialist_id, photo, firstName,lastName,email, password,location,phone,role,experience,education,skillSet,language,hourlyRate,description)
    VALUES ( @specialist_id, @photo, @firstName, @lastName, @email, @password, @location, @phone,@role,@experience,@education,@skillSet,@language,@hourlyRate,@description);
END;
