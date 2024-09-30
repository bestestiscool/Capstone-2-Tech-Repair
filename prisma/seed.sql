-- Drop the existing tables (if they exist) to prevent errors
DROP TABLE IF EXISTS repair_costs;
DROP TABLE IF EXISTS projects;

-- Create the repair_costs table
CREATE TABLE repair_costs (
  id SERIAL PRIMARY KEY,
  device_type VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  repair_type VARCHAR(100) NOT NULL,
  cost DECIMAL(10, 2) NOT NULL,
  estimated_time VARCHAR(50) NOT NULL
);

-- Create the projects table with createdAt and updatedAt columns
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  code_link VARCHAR(255),
  live_demo_link VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data for repair_costs table
INSERT INTO repair_costs (device_type, model, repair_type, cost, estimated_time)
VALUES
  -- iPhone Models
  ('Phone', 'iPhone 12', 'Cracked Screen', 250, '1-2 hours'),
  ('Phone', 'iPhone 12', 'Battery Issue', 150, '1-2 hours'),
  ('Phone', 'iPhone 12', 'Water Damage', 300, '1-2 days'),
  ('Phone', 'iPhone 11', 'Cracked Screen', 220, '1-2 hours'),
  ('Phone', 'iPhone 11', 'Battery Issue', 140, '1-2 hours'),
  ('Phone', 'iPhone 11', 'Water Damage', 280, '1-2 days'),
  
  -- Samsung Galaxy Models
  ('Phone', 'Samsung Galaxy S21', 'Cracked Screen', 270, '1-2 hours'),
  ('Phone', 'Samsung Galaxy S21', 'Battery Issue', 140, '1-2 hours'),
  ('Phone', 'Samsung Galaxy S21', 'Water Damage', 310, '1-2 days'),
  ('Phone', 'Samsung Galaxy S20', 'Cracked Screen', 260, '1-2 hours'),
  ('Phone', 'Samsung Galaxy S20', 'Battery Issue', 135, '1-2 hours'),
  ('Phone', 'Samsung Galaxy S20', 'Water Damage', 300, '1-2 days'),
  
  -- Google Pixel Models
  ('Phone', 'Google Pixel 5', 'Cracked Screen', 230, '1-2 hours'),
  ('Phone', 'Google Pixel 5', 'Battery Issue', 130, '1-2 hours'),
  ('Phone', 'Google Pixel 5', 'Water Damage', 250, '1-2 days'),
  ('Phone', 'Google Pixel 4', 'Cracked Screen', 220, '1-2 hours'),
  ('Phone', 'Google Pixel 4', 'Battery Issue', 125, '1-2 hours'),
  ('Phone', 'Google Pixel 4', 'Water Damage', 240, '1-2 days'),
  
  -- MacBook Models
  ('Laptop', 'MacBook Pro (2020)', 'Cracked Screen', 600, '1-2 days'),
  ('Laptop', 'MacBook Pro (2020)', 'Battery Issue', 200, '1-2 hours'),
  ('Laptop', 'MacBook Pro (2019)', 'Cracked Screen', 580, '1-2 days'),
  ('Laptop', 'MacBook Pro (2019)', 'Battery Issue', 190, '1-2 hours'),
  ('Laptop', 'MacBook Air (2020)', 'Cracked Screen', 550, '1-2 days'),
  ('Laptop', 'MacBook Air (2020)', 'Battery Issue', 180, '1-2 hours'),

  -- Dell XPS Models
  ('Laptop', 'Dell XPS 13', 'Cracked Screen', 500, '1-2 days'),
  ('Laptop', 'Dell XPS 13', 'Battery Issue', 160, '1-2 hours'),
  ('Laptop', 'Dell XPS 15', 'Cracked Screen', 550, '1-2 days'),
  ('Laptop', 'Dell XPS 15', 'Battery Issue', 180, '1-2 hours'),

  -- Other Laptop Models
  ('Laptop', 'HP Spectre x360', 'Cracked Screen', 530, '1-2 days'),
  ('Laptop', 'HP Spectre x360', 'Battery Issue', 170, '1-2 hours'),
  ('Laptop', 'Lenovo ThinkPad X1 Carbon', 'Cracked Screen', 520, '1-2 days'),
  ('Laptop', 'Lenovo ThinkPad X1 Carbon', 'Battery Issue', 175, '1-2 hours');

-- Seed data for projects table with createdAt and updatedAt fields
INSERT INTO projects (name, description, code_link, live_demo_link, created_at, updated_at)
VALUES
  ('First Project', 'This is the first sample project created using a seeder', 'https://github.com/bestestiscool/Unit_42_Hatchaway_Snack_or_booze', 'https://first-project-demo.com', NOW(), NOW()),
  ('Second Project', 'This is the second sample project created using a seeder', 'https://github.com/bestestiscool/Unit_41.3_React_History_exercise_jokes', 'https://second-project-demo.com', NOW(), NOW());
