
CREATE OR ALTER PROCEDURE updateSp(
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
    UPDATE Specialist 
    SET 
  
   firstName=@firstName,
   lastname= @lastName,
   email= @email,
   password= @password,
   location= @location,
   phone= @phone,
   photo= @photo,
   role=@role, 
   experience=@experience,
   education=@education,
   language=@language,
   hourlyRate= @hourlyRate,
   skillSet= @skillSet, 
   description=@description 
        
    WHERE specialist_id = @specialist_id;
END
