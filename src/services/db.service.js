import pool from '../config/db.config.js';

// Insert a post into the database
export const insertPost = async (userId, title, body) => {
  const query = `
    INSERT INTO posts (userId, title, body)
    VALUES ($1, $2, $3)
    ON CONFLICT (id) DO NOTHING;
  `;
  await pool.query(query, [userId, title, body]);
};

// Fetch all posts from the database
export const getPosts = async () => {
  const query = 'SELECT * FROM posts';
  const result = await pool.query(query);
  return result.rows;
};
