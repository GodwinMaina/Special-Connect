
CREATE OR ALTER PROCEDURE addReview
    @review_id VARCHAR(250),
    @client_id VARCHAR(250),
    @specialist_id VARCHAR(250),
    @comment TEXT
AS
BEGIN
    INSERT INTO Review(review_id, client_id, specialist_id, comment)
    VALUES (@review_id, @client_id, @specialist_id, @comment)
END