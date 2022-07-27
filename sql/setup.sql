-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists birds;

CREATE table birds (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    size VARCHAR,
    location VARCHAR NOT NULL,
    migratory BOOLEAN
);

INSERT INTO birds (name, type, size, location, migratory) VALUES
('American Robin', 'Songbird', 'Small', 'North America', true),
('American Crow', 'Corvid', 'Medium', 'North America', false ),
('American Kestrel', 'Falcon', 'Medium', 'North America', true),
('New World oriole', 'Blackbird', 'Xtra Small', 'North America', true),
('Band Tailed pigeon', 'Pigeon', 'Large', 'North America', true);


