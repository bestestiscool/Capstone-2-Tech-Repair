-- Clear the 'repair_costs' table before inserting new data
TRUNCATE TABLE repair_costs RESTART IDENTITY CASCADE;

-- Seed data for 'repair_costs' table
INSERT INTO repair_costs (device_type, model, repair_type, cost, estimated_time, createdAt, updatedAt)
VALUES
  ('Phone', 'iPhone 12', 'Cracked Screen', 250, '1-2 hours', NOW(), NOW()),
  ('Phone', 'iPhone 12', 'Battery Issue', 150, '1-2 hours', NOW(), NOW()),
  ('Phone', 'iPhone 12', 'Water Damage', 300, '1-2 days', NOW(), NOW()),
  ('Phone', 'Samsung Galaxy S21', 'Cracked Screen', 270, '1-2 hours', NOW(), NOW()),
  ('Phone', 'Samsung Galaxy S21', 'Battery Issue', 140, '1-2 hours', NOW(), NOW()),
  ('Phone', 'Google Pixel 5', 'Cracked Screen', 230, '1-2 hours', NOW(), NOW()),
  ('Laptop', 'MacBook Pro (2020)', 'Cracked Screen', 600, '1-2 days', NOW(), NOW()),
  ('Laptop', 'MacBook Pro (2020)', 'Battery Issue', 200, '1-2 hours', NOW(), NOW()),
  ('Laptop', 'Dell XPS 13', 'Cracked Screen', 500, '1-2 days', NOW(), NOW()),
  ('Laptop', 'Dell XPS 13', 'Battery Issue', 160, '1-2 hours', NOW(), NOW());

-- Clear the 'projects' table before inserting new data
TRUNCATE TABLE projects RESTART IDENTITY CASCADE;

-- Seed data for 'projects' table
INSERT INTO projects (name, description, code_link, live_demo_link, createdAt, updatedAt)
VALUES
  ('First Project', 'This is the first sample project created using a seeder', 'https://github.com/bestestiscool/Unit_42_Hatchaway_Snack_or_booze', 'https://first-project-demo.com', NOW(), NOW()),
  ('Second Project', 'This is the second sample project created using a seeder', 'https://github.com/bestestiscool/Unit_41.3_React_History_exercise_jokes', 'https://second-project-demo.com', NOW(), NOW());
