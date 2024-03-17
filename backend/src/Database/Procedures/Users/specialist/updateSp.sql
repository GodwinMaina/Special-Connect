
CREATE OR ALTER PROCEDURE updateSp(
    @specialist_id VARCHAR(250),
    @firstName VARCHAR(250),
    @lastName VARCHAR(250),
    @email VARCHAR(250),
    @password VARCHAR(250),
    @phone VARCHAR(250)
   
    
)

AS
BEGIN
    UPDATE Specialist 
    SET 
  
   firstName=@firstName,
   lastname= @lastName,
   email= @email,
   password= @password,
   phone= @phone

    WHERE specialist_id = @specialist_id;
END
