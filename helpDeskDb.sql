CREATE DATABASE helpDeskDb;

CREATE TABLE `ticket` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `detail` varchar(300) DEFAULT NULL,
  `resolution` varchar(100) DEFAULT NULL,
  `open` boolean,
  `openedBy` varchar(50) DEFAULT NULL,
  `closedBy` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)  
  );

INSERT INTO ticket (detail, resolution, open, openedBy, closedBy) VALUES

('eror while running app', 'fixed error', false, 'Abdullah', 'Aranda'),
('backend crash due to error', NULL, true, 'Miraj', 'Ginie'),
('API not showing any data from backend', 'backend restarted', false, 'David','Amanda');


SELECT * FROM ticket;

CREATE TABLE `bookmark` (     
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(80) DEFAULT NULL,
  `detail` varchar(300) DEFAULT NULL,
  `bookmarkId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`), FOREIGN KEY (`bookmarkId`) REFERENCES `ticket` (`id`)
);

INSERT INTO bookmark (username, detail, bookmarkId) VALUES
('Abdullah', 'eror while running app', 1),
('David', 'API not showing any data from backend', 3);

SELECT * FROM bookmark;
