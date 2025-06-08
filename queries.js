const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Function: View All Employees
async function viewAllEmployees() {
  try {
    const result = await pool.query(`
      SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary,
             CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN role r ON e.role_id = r.id
      LEFT JOIN department d ON r.department_id = d.id
      LEFT JOIN employee m ON e.manager_id = m.id;
    `);
    console.table(result.rows);
  } catch (err) {
    console.error('Error viewing employees:', err.message);
  }
}

// Export all functions at once
module.exports = {
  viewAllEmployees
};
