
CREATE OR ALTER PROCEDURE chatExists(
    @client_id VARCHAR(255),
    @specialist_id VARCHAR(255)
)
AS
BEGIN
     SELECT * FROM Chats WHERE client_id = @client_id AND specialist_id = @specialist_id OR client_id = @specialist_id AND specialist_id = @client_id
END

 
                          
--  SELECT * FROM Chats WHERE senderId = @senderId AND receiverId = @receiverId OR senderId =@receiverId AND receiverId = @senderId
 