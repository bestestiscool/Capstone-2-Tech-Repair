CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  code_link VARCHAR(255),
  live_demo_link VARCHAR(255)
);

CREATE TABLE repair_costs (
  id SERIAL PRIMARY KEY,
  repair_type VARCHAR(100) NOT NULL,
  device_type VARCHAR(100) NOT NULL,
  cost DECIMAL(10, 2) NOT NULL,
  estimated_time VARCHAR(50) NOT NULL
);
