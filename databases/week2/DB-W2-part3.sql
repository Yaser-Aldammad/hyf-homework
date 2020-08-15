
-- part 3, DB W2, more queries
USE lesson_db;

-- tasks assigned to useres => emails = @spotify.com 
SELECT t.title
FROM user_task ut 
INNER JOIN task t ON ut.task_id=t.id 
INNER JOIN (
    SELECT u.id, u.email
    FROM user u
    WHERE email LIKE '%@spotify.com'
) u ON ut.user_id=u.id;

-- tasks for Donald Duck
SELECT DISTINCT user.name, task.id, task.title, task.description, status.name FROM user
INNER JOIN user_task ON user.id = user_task.task_id
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN status ON task.status_id = status_id
WHERE user.name LIKE '%Donald Duck%' AND status.name = 'Not started';

-- tasks for Maryrose Meadows
SELECT * FROM user
JOIN user_task ON user.id = user_task.user_id 
JOIN task ON user_task.task_id = task.id 
WHERE user.name = 'Aubry Polak' AND MONTH(created) = 05;

-- use group by
SELECT 
count(*), MONTHNAME(created) 
AS 
    task_per_month 
FROM task GROUP BY task_per_month;



