DROP DATABASE IF EXISTS wanderly;

CREATE DATABASE wanderly;

USE wanderly;



-------CATEGORIES-------------------------------------------------------------------------------------------------------------------------------------


CREATE TABLE categories(

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100) NOT NULL UNIQUE

);



-------CATEGORY DATA------------------------------------------------------------------------------------------------------------------------


INSERT INTO categories(name)
VALUES
('Temple'),
('Hill Station'),
('Waterfall'),
('Beach'),
('Heritage');



-------DESTINATIONS-------------------------------------------------------------------------------------------------------------------------------


CREATE TABLE destinations(

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(150) NOT NULL,

    location VARCHAR(200) NOT NULL,

    description TEXT,

    image VARCHAR(700),

    rating DECIMAL(2,1),

    category_id INT,

    FOREIGN KEY(category_id)
    REFERENCES categories(id)

);



-------DESTINATION DATA-------------------------------------------------------------------------------------------------------------------------


INSERT INTO destinations
(
    name,
    location,
    description,
    image,
    rating,
    category_id
)
VALUES

(
    'Brihadeeswarar Temple',
    'Thanjavur, Tamil Nadu',
    'A magnificent Chola-era temple known for its grand architecture, towering vimana and rich cultural history.',
    'https://images.unsplash.com/photo-1650624402982-a4ef2c835ff5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    4.9,
    5
),

(
    'Meenakshi Amman Temple',
    'Madurai, Tamil Nadu',
    'One of South India’s most iconic temple complexes, celebrated for its colourful towers, sculptures and living heritage.',
    'https://media.istockphoto.com/id/2152773033/photo/sri-meenakshi-temple.jpg?s=612x612&w=0&k=20&c=_KjjiQtsXTbcJdUf6esdACztvRxMM6PynAxmMduDrdk=',
    4.9,
    1
),

(
    'Kodaikanal',
    'Dindigul, Tamil Nadu',
    'A peaceful hill station surrounded by forests, misty mountains and the famous Kodaikanal Lake.',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85',
    4.8,
    2
),

(
    'Ooty',
    'Nilgiris, Tamil Nadu',
    'A classic South Indian hill retreat known for tea gardens, cool weather, mountain views and scenic landscapes.',
    'https://images.unsplash.com/photo-1707655315272-33a54a771068?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    4.7,
    2
),

(
    'Courtallam Falls',
    'Tenkasi, Tamil Nadu',
    'A famous waterfall destination surrounded by lush Western Ghats landscapes and known for its refreshing natural beauty.',
    'https://i.pinimg.com/1200x/9f/0c/f1/9f0cf13a0c5301b4eed6eef825e9d586.jpg',
    4.8,
    3
),

(
    'Marina Beach',
    'Chennai, Tamil Nadu',
    'One of India’s best-known urban beaches, offering a long coastline and a lively atmosphere.',
    'https://t4.ftcdn.net/jpg/01/91/91/93/360_F_191919328_bB0qS3Pe8Qpo6vnK9tvYPujXd3HlKYAl.jpg',
    4.6,
    4
),

(
    'Munnar',
    'Idukki, Kerala',
    'A beautiful mountain destination surrounded by tea plantations, misty valleys and green landscapes.',
    'https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg=',
    4.9,
    2
),

(
    'Alappuzha',
    'Alappuzha, Kerala',
    'Known for its peaceful backwaters, houseboats, lagoons and beautiful Kerala landscapes.',
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
    4.8,
    4
),

(
    'Varkala Beach',
    'Thiruvananthapuram, Kerala',
    'A scenic coastal destination famous for its dramatic cliffs, Arabian Sea views and relaxed atmosphere.',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    4.8,
    4
),

(
    'Guruvayur Temple',
    'Thrissur, Kerala',
    'A famous Kerala temple town known for its cultural importance and traditional architecture.',
    'https://i0.wp.com/blog.templesofindia.org/wp-content/uploads/2021/10/Ei0sB0aUwAEVQwE.jpg?fit=1080%2C810&ssl=1',
    4.7,
    1
);




-------TRIPS-----------------------------------------------------------------------------------------------------------------------------------


CREATE TABLE trips(

    id INT PRIMARY KEY AUTO_INCREMENT,

    trip_name VARCHAR(150) NOT NULL,

    start_date DATE NOT NULL,

    destination_id INT NOT NULL,

    FOREIGN KEY(destination_id)
    REFERENCES destinations(id)
    ON DELETE CASCADE

);



----------USERS--------------------------------------------------------------------------------------------------------------------------------


CREATE TABLE users(

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100),

    email VARCHAR(150) UNIQUE,

    password VARCHAR(255)

);



--------FAVOURITES------------------------------------------------------------------------------------------------------------------------------------------ 


CREATE TABLE favourites(

    id INT PRIMARY KEY AUTO_INCREMENT,

    user_id INT,

    destination_id INT,

    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

    FOREIGN KEY(destination_id)
    REFERENCES destinations(id)
    ON DELETE CASCADE

);



------------TEST QUERIES--------------------------------------------------------------------------------------------------------------------


SELECT * FROM categories;

SELECT * FROM destinations;

SELECT * FROM trips;


/* JOIN TEST */

SELECT
    destinations.id,
    destinations.name,
    destinations.location,
    categories.name AS category
FROM destinations
INNER JOIN categories
ON destinations.category_id = categories.id;

SELECT COUNT(*) AS total_destinations
FROM destinations;

SHOW TABLES;
