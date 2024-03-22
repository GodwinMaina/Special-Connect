
CREATE OR ALTER PROCEDURE getSpecialistReviews(
    @specialist_id VARCHAR(255))
AS
BEGIN
    SELECT r.review_id,
           r.comment,
           s.firstName AS specialistfirstName,
           s.email AS specialistemail,
           s.phone AS specialistphone,
           c.email AS clientemail,
           c.firstName AS clientfirstName,
           c.phone AS clientphone

    FROM Review r
    INNER JOIN Specialist s ON r.specialist_id = s.specialist_id 
    INNER JOIN Clients c ON r.client_id = c.client_id 
    WHERE r.specialist_id = @specialist_id 
END;
