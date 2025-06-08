-- Insert departments
INSERT INTO department (name)
VALUES 
  ('Engineering'),
  ('Finance'),
  ('Human Resources'),
  ('Marketing');

-- Insert roles (must use valid department_id values)
INSERT INTO role (title, salary, department_id)
VALUES 
  ('Software Engineer', 90000, 1),
  ('Accountant', 70000, 2),
  ('HR Manager', 80000, 3),
  ('Marketing Coordinator', 60000, 4);

-- Insert employees (must use valid role_id and manager_id can be NULL)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ('Alice', 'Anderson', 1, NULL),  -- No manager
  ('Bob', 'Brown', 2, NULL),       -- No manager
  ('Charlie', 'Clark', 1, 1),      -- Reports to Alice
  ('Dana', 'Davis', 4, 2);         -- Reports to Bob
