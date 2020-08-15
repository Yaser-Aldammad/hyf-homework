
-- part 3, DB W2, more queries
USE lesson_db;

-- tasks assigned to useres => emails = @spotify.com 
SELECT * from user
WHERE email like '%@spotify.com';

-- tasks for Donald Duck
SELECT  task.* from task
join user on user.name ="Donald Duck" and user.id = task.user_id
join status on status.name ='Not started' and status.id = task.status_id;

-- tasks for Maryrose Meadows
SELECT  task.* from task

join user on user.name ="Maryrose Meadows" and user.id = task.user_id
WHERE month(task.created) = 9;
 SELECT  month(created) month ,
 COUNT(*) as tasks
 FROM task
GROUP BY month(created);




