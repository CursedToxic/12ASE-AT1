CREATE TABLE IF NOT EXISTS RestaurantReservations(
    RerservationID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName TEXT NOT NULL,
    UserEmail TEXT NOT NULL,
    ReservationDate DATE NOT NULL,
    Time TIME NOT NULL,
    NumberOfGuests INTEGER NOT NULL,
    CONSTRAINT email_format CHECK (UserEmail LIKE '%@%.%')
);

-- Activity 1 --
INSERT INTO RestaurantReservations(UserName, UserEmail, ReservationDate, Time, NumberOfGuests) VALUES
('Alice', 'alice@example.com', '2024-09-20', '19:00', 4),
('Bob', 'bob@example.com', '2024-09-27', '20:30', 2),
('Charlie', 'charlie@example.com', '2024-09-13', '18:45', 3),
('Diana', 'diana@example.com', '2024-09-06', '19:30', 5),
('Ethan', 'ethan@example.com', '2024-09-13', '21:00', 2);

-- Activity 2 --
SELECT * 
FROM RestaurantReservations
WHERE Time BETWEEN '19:00' AND '20:00';

-- Activity 3 --
SELECT SUM(NumberOfGuests) AS TotalGuests
FROM RestaurantReservations
WHERE ReservationDate BETWEEN '2024-09-13' AND '2024-09-25';

-- Activity 4 -- 
DROP TABLE RestaurantReservations;

-- Activity 5 --
cursor.execute(
    "SELECT * FROM RestaurantReservations
    WHERE Time BETWEEN ? AND ?;"
    ("19:00", "20:00")
);
