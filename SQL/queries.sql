-- Activity 1: Create Table --
CREATE TABLE IF NOT EXISTS RestaurantReservations(
    ReservationID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName TEXT NOT NULL,
    UserEmail TEXT NOT NULL,
    ReservationDate DATE NOT NULL,
    Time TIME NOT NULL,
    NumberOfGuests INTEGER NOT NULL,
    CONSTRAINT email_format CHECK (UserEmail LIKE '%@%.%')
);

-- Enter Values into Table --
INSERT INTO RestaurantReservations(UserName, UserEmail, ReservationDate, Time, NumberOfGuests) VALUES
('Alice', 'alice@example.com', '2024-09-20', '19:00', 4),
('Bob', 'bob@example.com', '2024-09-27', '20:30', 2),
('Charlie', 'charlie@example.com', '2024-09-13', '18:45', 3),
('Diana', 'diana@example.com', '2024-09-06', '19:30', 5),
('Ethan', 'ethan@example.com', '2024-09-13', '21:00', 2);

-- Activity 2: Select Rows where time is between 7:00pm-8:00pm --
SELECT * 
FROM RestaurantReservations
WHERE Time BETWEEN '19:00' AND '20:00';

-- Activity 3: Find Total Number of Guests between 13/9 & 25/9 --
SELECT SUM(NumberOfGuests) AS TotalGuests
FROM RestaurantReservations
WHERE ReservationDate BETWEEN '2024-09-13' AND '2024-09-25';

-- Delete Table: If Needed -- 
DROP TABLE RestaurantReservations;