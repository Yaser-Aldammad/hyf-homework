USE lesson_db;
-- 1. Adding a task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES('Bring kids', 'both of them', now(), '2020-8-15 20:30:00', now(), 2, 5);

-- 2. Changing title
UPDATE task 
SET title = 'Dad Duties'  
WHERE id = 3;

-- 3. new task due date
UPDATE task
SET due_date = now()
WHERE id = 2;

-- 4. change task status
UPDATE task 
SET status_id = 2 
WHERE id = 25;

-- 5. task completed
UPDATE task
SET status_id = 10
WHERE id = 100;

-- 6. delet table
DELETE FROM task;